using System.Threading.Tasks;
using PenguinUpload.DataModels.Files;
using PenguinUpload.Services.Database;

namespace PenguinUpload.Services.FileStorage
{
    public class StoredFilesManager
    {
        public async Task<StoredFile> RegisterStoredFileAsync(string name, string identifier)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                var result = new StoredFile
                {
                    Name = name,
                    Identifier = identifier
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