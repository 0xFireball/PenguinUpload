using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using PenguinUpload.DataModels.Api;

namespace PenguinUpload.Infrastructure.Upload
{
    public class LocalStorageHandler : IFileUploadHandler
    {
        public async Task<FileUploadResult> HandleUpload(string fileName, Stream stream)
        {
            var fileId = Guid.NewGuid().ToString();
            var targetFile = GetTargetFilePath(fileId);

            using (var destinationStream = File.Create(targetFile))
            {
                await stream.CopyToAsync(destinationStream);
            }

            return new FileUploadResult
            {
                FileId = fileId,
                Size = stream.Length
            };
        }

        private string GetTargetFilePath(string fileIdentifier)
        {
            return Path.Combine(GetUploadDirectory(), fileIdentifier);
        }

        private string GetUploadDirectory()
        {
            var uploadDirectory = Path.Combine(PenguinUploadRegistry.Configuration.FileUploadDirectory);

            Directory.CreateDirectory(uploadDirectory);

            return uploadDirectory;
        }

        public Stream RetrieveFileStream(string id)
        {
            var filePath = GetTargetFilePath(id);
            return File.OpenRead(filePath);
        }

        public async Task DeleteFile(string fileId)
        {
            var filePath = GetTargetFilePath(fileId);
            await Task.Run(() => File.Delete(filePath));
        }

        public async Task NukeAllFiles(IEnumerable<string> identifiers)
        {
            foreach (var id in identifiers)
            {
                await DeleteFile(id);
            }
        }
    }
}