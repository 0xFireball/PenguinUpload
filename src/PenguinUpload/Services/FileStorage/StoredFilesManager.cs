using PenguinUpload.DataModels.Auth;
using PenguinUpload.DataModels.Files;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Services.Database;
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
        /// <param name="identifier"></param>
        /// <param name="fileSize"></param>
        /// <returns></returns>
        public async Task<StoredFile> RegisterStoredFileAsync(string ownerName, string fileName, string userPath, string identifier,
            long fileSize)
        {
            return await Task.Run(() =>
            {
                var userDatabaseLock = PenguinUploadContext.ServiceTable.GetOrCreate(ownerName).UserLock;
                userDatabaseLock.ObtainExclusiveWrite();
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                var result = new StoredFile
                {
                    Name = fileName,
                    Identifier = identifier,
                    FileSize = fileSize,
                    OwnerUsername = ownerName,
                    ParentDirPath = userPath
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

        public async Task<StoredFile> GetStoredFileByIdentifierAsync(string id)
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var storedFiles = db.GetCollection<StoredFile>(DatabaseAccessService.StoredFilesCollectionDatabaseKey);
                return storedFiles
                    .FindOne(x => x.Identifier == id);
            });
        }

        /// <summary>
        /// Retrieves metadata for public access to a file
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<PublicFile> GetPublicStoredFileByIdentifierAsync(string id)
        {
            var storedFile = await GetStoredFileByIdentifierAsync(id);
            return new PublicFile
            {
                Identifier = storedFile.Identifier,
                Name = storedFile.Name,
                UploadedDate = storedFile.UploadedDate,
                FileSize = storedFile.FileSize,
                Crypto = storedFile.Crypto,
            };
        }

        public async Task<IEnumerable<StoredFile>> GetStoredFilesByUserAsync(RegisteredUser user)
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

        public async Task NukeAllFilesAsync(RegisteredUser user)
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

        public async Task<bool> UpdateStoredFileInDatabaseAsync(StoredFile currentFile)
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

        /// <summary>
        /// Set the password on a file. This will overwrite an existing password.
        /// </summary>
        /// <param name="file"></param>
        /// <param name="pass"></param>
        /// <returns></returns>
        public async Task SetFilePasswordAsync(StoredFile file, string pass)
        {
            if (pass == null) // No password
            {
                file.Crypto = null;
            }
            var cryptoConf = PasswordCryptoConfiguration.CreateDefault();
            var cryptoHelper = new AuthCryptoHelper(cryptoConf);
            var pwSalt = cryptoHelper.GenerateSalt();
            file.Crypto = new ItemCrypto
            {
                Conf = cryptoConf,
                Salt = pwSalt,
                Key = cryptoHelper.CalculateUserPasswordHash(pass, pwSalt)
            };
            await UpdateStoredFileInDatabaseAsync(file);
        }
    }
}