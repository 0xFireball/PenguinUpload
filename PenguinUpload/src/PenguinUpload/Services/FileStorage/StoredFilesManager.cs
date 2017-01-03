using System.Threading.Tasks;
using PenguinUpload.DataModels.Files;
using PenguinUpload.Services.Database;
using PenguinUpload.Utilities;

namespace PenguinUpload.Services.FileStorage
{
    public class StoredFilesManager
    {
        public async Task<StoredFile> RegisterStoredFileAsync(string name, string identifier, double fileSize)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                var result = new StoredFile
                {
                    Name = name,
                    Identifier = identifier,
                    HumanReadableSize = HumanReadableFileSize.FromLength(fileSize)
                };
                using (var trans = db.BeginTrans())
                {
                    storedFiles.Insert(result);
                    trans.Commit();
                }
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
                return storedFiles.FindOne(x => x.Identifier == id);
            });
        }
    }
}