using PenguinUpload.DataModels.Auth;
using PenguinUpload.DataModels.Files;
using PenguinUpload.Services.Database;
using PenguinUpload.Utilities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PenguinUpload.Services.FileStorage
{
    public class StoredFilesManager
    {
        /// <summary>
        /// Registers a stored file
        /// </summary>
        /// <param name="ownerName"></param>
        /// <param name="fileName"></param>
        /// <param name="path"></param>
        /// <param name="identifier"></param>
        /// <param name="fileSize"></param>
        /// <returns></returns>
        public async Task<StoredFile> RegisterStoredFileAsync(string ownerName, string fileName, string userPath, string identifier,
            double fileSize)
        {
            return await Task.Run(() =>
            {
                var userDatabaseLock = PenguinUploadRegistry.ServiceTable.GetOrCreate(ownerName).UserLock;
                userDatabaseLock.ObtainExclusiveWrite();
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                var result = new StoredFile
                {
                    Name = fileName,
                    Identifier = identifier,
                    HumanReadableSize = HumanReadableFileSize.FromLength(fileSize),
                    OwnerUsername = ownerName,
                    UserPath = userPath
                };
                using (var trans = db.BeginTrans())
                {
                    storedFiles.Insert(result);
                    trans.Commit();
                }
                userDatabaseLock.ReleaseExclusiveWrite();

                // Index the database
                storedFiles.EnsureIndex(x => x.Identifier);
                return result;
            });
        }

        public async Task<StoredFile> GetStoredFileByIdentifier(string id)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                return storedFiles
                    .FindOne(x => x.Identifier == id);
            });
        }

        public async Task<IEnumerable<StoredFile>> GetStoredFilesByUser(RegisteredUser user)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                return storedFiles
                    .Find(x => x.OwnerUsername == user.Username)
                    .OrderByDescending(x => x.UploadedDate);
            });
        }

        public async Task UnregisterStoredFileAsync(string fileId)
        {
            await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    storedFiles.Delete(x => x.Identifier == fileId);
                    trans.Commit();
                }
                storedFiles.EnsureIndex(x => x.Identifier);
            });
        }

        public async Task NukeAllFiles(RegisteredUser user)
        {
            await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    storedFiles
                        .Delete(x => x.OwnerUsername == user.Username);
                    trans.Commit();
                }
                storedFiles.EnsureIndex(x => x.Identifier);
            });
        }

        public async Task<bool> UpdateStoredFileInDatabase(StoredFile currentFile)
        {
            return await Task.Run(() =>
            {
                bool result;
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles =
                    db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    result = storedFiles.Update(currentFile);
                    trans.Commit();
                }
                return result;
            });
        }

        public async Task SetFilePassword(StoredFile file, string pass)
        {
            file.Password = pass;
            await UpdateStoredFileInDatabase(file);
        }
    }
}