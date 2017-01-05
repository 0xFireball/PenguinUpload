using System;
using System.Collections;
using System.Security;
using System.Threading.Tasks;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Database;
using PenguinUpload.Utilities;

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

        public async Task<bool> UpdateUserInDatabase(RegisteredUser user)
        {
            return await Task.Run(() =>
            {
                bool result;
                var db = new DatabaseAccessService().OpenOrCreateDefault();
                var registeredUsers =
                    db.GetCollection<RegisteredUser>(DatabaseAccessService.UsersCollectionDatabaseKey);
                using (var trans = db.BeginTrans())
                {
                    result = registeredUsers.Update(user);
                    trans.Commit();
                }
                return result;
            });
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
                var pwSalt = AuthCryptoHelper.GetRandomSalt(AuthCryptoHelper.DefaultSaltLength);
                var encryptedPassword =
                    AuthCryptoHelper.CalculateUserPasswordHash(regRequest.Password, pwSalt, cryptoConf);
                // Create user
                newUserRecord = new RegisteredUser
                {
                    Identifier = Guid.NewGuid().ToString(),
                    Username = regRequest.Username,
                    ApiKey = StringUtils.SecureRandomString(AuthCryptoHelper.DefaultApiKeyLength),
                    CryptoSalt = pwSalt,
                    PasswordCryptoConf = cryptoConf,
                    PasswordKey = encryptedPassword
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
            return await Task.Run(() => CheckPassword(password, user));
        }

        private static bool CheckPassword(string password, RegisteredUser user)
        {
            //Calculate hash and compare
            var pwKey =
                AuthCryptoHelper.CalculateUserPasswordHash(password, user.CryptoSalt,
                    user.PasswordCryptoConf);
            return StructuralComparisons.StructuralEqualityComparer.Equals(pwKey, user.PasswordKey);
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

        public async Task DisableUser(RegisteredUser user)
        {
            user.Enabled = false;
            await UpdateUserInDatabase(user);
        }

        public async Task ChangeUserPasswordAsync(RegisteredUser user, string newPassword)
        {
            await Task.Run(() =>
            {
                // Recompute password crypto
                var cryptoConf = PasswordCryptoConfiguration.CreateDefault();
                var pwSalt = AuthCryptoHelper.GetRandomSalt(AuthCryptoHelper.DefaultSaltLength);
                var encryptedPassword =
                    AuthCryptoHelper.CalculateUserPasswordHash(newPassword, pwSalt, cryptoConf);
                user.CryptoSalt = pwSalt;
                user.PasswordCryptoConf = cryptoConf;
                user.PasswordKey = encryptedPassword;
            });
            await UpdateUserInDatabase(user);
        }

        public async Task GenerateNewApiKeyAsync(RegisteredUser user)
        {
            await Task.Run(() =>
            {
                // Recompute key
                user.ApiKey = StringUtils.SecureRandomString(AuthCryptoHelper.DefaultApiKeyLength);
            });
            await UpdateUserInDatabase(user);
        }
    }
}