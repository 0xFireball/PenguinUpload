using PenguinUpload.DataModels.Api;
using PenguinUpload.Services.Authentication;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Upload
{
    public class LocalStorageHandler : IFileUploadHandler
    {
        private readonly string _owner;
        private readonly bool _adminOverride;
        public IPenguinUploadContext ServerContext;

        public LocalStorageHandler(IPenguinUploadContext serverContext, string owner, bool adminOverride = false)
        {
            ServerContext = serverContext;
            _owner = owner;
            _adminOverride = adminOverride;
        }

        /// <summary>
        /// Requires that an owner be provided unless the accessor is an administrator
        /// All operations that act on a quota should call this to ensure
        /// that the quota is handled correctly
        /// </summary>
        /// <exception cref="ArgumentException"></exception>
        private void AssertIdentityProvided()
        {
            if (_owner == null && !_adminOverride)
            {
                throw new ArgumentException("Unless acting as administrator, storage owner must be provided.");
            }
        }

        public async Task<FileUploadResult> HandleUploadAsync(string fileName, Stream stream)
        {
            AssertIdentityProvided(); // Quota is affected
            var fileId = Guid.NewGuid().ToString();
            var targetFile = GetTargetFilePath(fileId);
            var uploadStreamFileSize = stream.Length;

            try
            {
                // Write file (Wait for upload throttle)
                await ServerContext.ServiceTable[_owner]
                    .UploadThrottle.WithResourceAsync(async () =>
                    {
                        using (var destinationStream = File.Create(targetFile))
                        {
                            await stream.CopyToAsync(destinationStream);
                        }
                    });

                // Make sure user has enough space remaining
                if (_owner != null)
                {
                    var lockEntry = ServerContext.ServiceTable[_owner].UserLock;
                    await lockEntry.ObtainExclusiveWriteAsync();
                    var userManager = new WebUserManager(ServerContext);
                    var ownerData = await userManager.FindUserByUsernameAsync(_owner);
                    var afterUploadSpace = ownerData.StorageUsage + uploadStreamFileSize;
                    if (afterUploadSpace > ownerData.StorageQuota)
                    {
                        lockEntry.ReleaseExclusiveWrite();
                        // Throw exception, catch block will remove file and rethrow
                        throw new QuotaExceededException();
                    }
                    // Increase user storage usage
                    ownerData.StorageUsage += uploadStreamFileSize;
                    await userManager.UpdateUserInDatabaseAsync(ownerData);
                    lockEntry.ReleaseExclusiveWrite();
                }
            }
            catch (QuotaExceededException)
            {
                // Roll back write
                await Task.Run(() => File.Delete(targetFile));
                throw;
            }

            return new FileUploadResult
            {
                FileId = fileId,
                Size = uploadStreamFileSize
            };
        }

        private string GetTargetFilePath(string fileIdentifier)
        {
            return Path.Combine(GetUploadDirectory(), fileIdentifier);
        }

        private string GetUploadDirectory()
        {
            var uploadDirectory = Path.Combine(ServerContext.Configuration.UploadDirectory);

            Directory.CreateDirectory(uploadDirectory);

            return uploadDirectory;
        }

        /// <summary>
        /// Retrieve the file stream for a file ID. This does not require an owner.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Stream RetrieveFileStream(string id)
        {
            // Quota is not affected
            var filePath = GetTargetFilePath(id);
            return File.OpenRead(filePath);
        }

        public async Task DeleteFileAsync(string fileId)
        {
            AssertIdentityProvided(); // Quota is affected
            var filePath = GetTargetFilePath(fileId);
            var fileInfo = await Task.Run(() => new FileInfo(filePath));
            var fileSize = fileInfo.Length;
            await Task.Run(() => File.Delete(filePath));
            if (_owner != null)
            {
                var lockEntry = ServerContext.ServiceTable[_owner].UserLock;
                // Decrease user storage usage
                await lockEntry.ObtainExclusiveWriteAsync();
                var userManager = new WebUserManager(ServerContext);
                var ownerData = await userManager.FindUserByUsernameAsync(_owner);
                var prevStorageUsage = ownerData.StorageUsage;
                ownerData.StorageUsage -= fileSize;
                await userManager.UpdateUserInDatabaseAsync(ownerData);
                lockEntry.ReleaseExclusiveWrite();
            }
        }

        public async Task NukeAllFilesAsync(IEnumerable<string> identifiers)
        {
            foreach (var id in identifiers)
            {
                await DeleteFileAsync(id);
            }
        }
    }
}