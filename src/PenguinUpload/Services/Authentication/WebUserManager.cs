using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Database;
using PenguinUpload.Utilities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Security;
using System.Threading.Tasks;

namespace PenguinUpload.Services.Authentication
{
    /// <summary>
    /// A user manager service. Provides access to common operations with users, and abstracts the database
    /// </summary>
    public class WebUserManager
    {
        public async Task<RegisteredUser> FindUserByUsernameAsync(string username)
        {
            return await Task.Run(() =>
            {
                RegisteredUser storedUserRecord = null;
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var registeredUsers =
                    db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
                var userRecord = registeredUsers.FindOne(u => u.Username == username);
                storedUserRecord = userRecord;

                return storedUserRecord;
            });
        }

        public RegisteredUser FindUserByApiKeyAsync(string apiKey)
        {
            RegisteredUser storedUserRecord = null;
            var db = new DatabaseAccessService().OpenOrCreateDefault();
            var registeredUsers = db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
            var userRecord = registeredUsers.FindOne(u => u.ApiKey == apiKey);
            storedUserRecord = userRecord;

            return storedUserRecord ?? null;
        }

        /// <summary>
        /// Warning: Callers are expected to use their own locks before calling this method!
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task<bool> UpdateUserInDatabase(RegisteredUser user)
        {
            var result = false;
            await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var registeredUsers =
                    db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    result = registeredUsers.Update(user);
                    trans.Commit();
                }
            });
            return result;
        }

        /// <summary>
        /// Attempts to register a new user. Only the username is validated, it is expected that other fields have already been validated!
        /// </summary>
        public async Task<RegisteredUser> RegisterUserAsync(RegistrationRequest request)
        {
            return await Task.Run(() => RegisterUser(request));
        }

        private RegisteredUser RegisterUser(RegistrationRequest regRequest)
        {
            RegisteredUser newUserRecord = null;
            if (FindUserByUsernameAsync(regRequest.Username).GetAwaiter().GetResult() != null)
            {
                //BAD! Another conflicting user exists!
                throw new SecurityException("A user with the same username already exists!");
            }
            var db = new DatabaseAccessService().OpenOrCreateDefault();
            var registeredUsers = db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
            using (var trans = db.BeginTrans())
            {
                // Calculate cryptographic info
                var cryptoConf = PasswordCryptoConfiguration.CreateDefault();
                var cryptoHelper = new AuthCryptoHelper(cryptoConf);
                var pwSalt = cryptoHelper.GenerateSalt();
                var encryptedPassword =
                    cryptoHelper.CalculateUserPasswordHash(regRequest.Password, pwSalt);
                // Create user
                newUserRecord = new RegisteredUser
                {
                    Identifier = Guid.NewGuid().ToString(),
                    Username = regRequest.Username,
                    ApiKey = StringUtils.SecureRandomString(AuthCryptoHelper.DefaultApiKeyLength),
                    Crypto = new ItemCrypto
                    {
                        Salt = pwSalt,
                        Conf = cryptoConf,
                        Key = encryptedPassword
                    }
                };
                // Add the user to the database
                registeredUsers.Insert(newUserRecord);

                // Index database
                registeredUsers.EnsureIndex(x => x.Identifier);
                registeredUsers.EnsureIndex(x => x.ApiKey);
                registeredUsers.EnsureIndex(x => x.Username);

                trans.Commit();
            }
            return newUserRecord;
        }

        public async Task<bool> CheckPasswordAsync(string password, RegisteredUser user)
        {
            var ret = false;
            var lockEntry = PenguinUploadContext.ServiceTable.GetOrCreate(user.Username).UserLock;
            await lockEntry.WithConcurrentRead(Task.Run(() =>
            {
                //Calculate hash and compare
                var cryptoHelper = new AuthCryptoHelper(user.Crypto.Conf);
                var pwKey =
                    cryptoHelper.CalculateUserPasswordHash(password, user.Crypto.Salt);
                ret = StructuralComparisons.StructuralEqualityComparer.Equals(pwKey, user.Crypto.Key);
            }));
            return ret;
        }

        public async Task RemoveUser(string username)
        {
            await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var registeredUsers =
                    db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    registeredUsers.Delete(u => u.Username == username);
                    trans.Commit();
                }
            });
        }

        public async Task SetQuota(RegisteredUser user, long quota)
        {
            var lockEntry = PenguinUploadContext.ServiceTable.GetOrCreate(user.Username).UserLock;
            await lockEntry.ObtainExclusiveWriteAsync();
            user.StorageQuota = quota;
            await UpdateUserInDatabase(user);
            lockEntry.ReleaseExclusiveWrite();
        }

        public async Task SetEnabled(RegisteredUser user, bool status)
        {
            var lockEntry = PenguinUploadContext.ServiceTable.GetOrCreate(user.Username).UserLock;
            await lockEntry.ObtainExclusiveWriteAsync();
            user.Enabled = status;
            await UpdateUserInDatabase(user);
            lockEntry.ReleaseExclusiveWrite();
        }

        public async Task ChangeUserPasswordAsync(RegisteredUser user, string newPassword)
        {
            var lockEntry = PenguinUploadContext.ServiceTable.GetOrCreate(user.Username).UserLock;
            await lockEntry.WithExclusiveWrite(Task.Run(() =>
            {
                // Recompute password crypto
                var cryptoConf = PasswordCryptoConfiguration.CreateDefault();
                var cryptoHelper = new AuthCryptoHelper(cryptoConf);
                var pwSalt = cryptoHelper.GenerateSalt();
                var encryptedPassword =
                    cryptoHelper.CalculateUserPasswordHash(newPassword, pwSalt);
                user.Crypto = new ItemCrypto
                {
                    Salt = pwSalt,
                    Conf = cryptoConf,
                    Key = encryptedPassword
                };
            }));
        }

        public async Task GenerateNewApiKeyAsync(RegisteredUser user)
        {
            var lockEntry = PenguinUploadContext.ServiceTable.GetOrCreate(user.Username).UserLock;
            await lockEntry.WithExclusiveWrite(Task.Run(() =>
            {
                // Recompute key
                user.ApiKey = StringUtils.SecureRandomString(AuthCryptoHelper.DefaultApiKeyLength);
            }));
        }

        public async Task<IEnumerable<RegisteredUser>> GetAllUsersAsync()
        {
            return await Task.Run(() =>
            {
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var registeredUsers =
                    db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
                return registeredUsers.FindAll();
            });
        }
    }
}