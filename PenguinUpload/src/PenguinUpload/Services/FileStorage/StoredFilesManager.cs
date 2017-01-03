using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.DataModels.Files;
using PenguinUpload.Services.Database;
using PenguinUpload.Utilities;

namespace PenguinUpload.Services.FileStorage
{
    public class StoredFilesManager
    {
        public async Task<StoredFile> RegisterStoredFileAsync(RegisteredUser owner, string name, string identifier,
            double fileSize)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                var result = new StoredFile
                {
                    Name = name,
                    Identifier = identifier,
                    HumanReadableSize = HumanReadableFileSize.FromLength(fileSize),
                    Owner = owner
                };
                using (var trans = db.BeginTrans())
                {
                    storedFiles.Insert(result);
                    trans.Commit();
                }
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
                    .Include(x => x.Owner)
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
                    .Include(x => x.Owner)
                    .Find(x => x.Owner.Username == user.Username)
                    .OrderBy(x => x.UploadedDate);
            });
        }
    }
}