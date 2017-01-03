using LiteDB;
using Newtonsoft.Json;
using PenguinUpload.Services.Authentication;

namespace PenguinUpload.DataModels.Auth
{
    /// <summary>
    /// Represents a user who is registered and on record in the database.
    /// </summary>
    public class RegisteredUser : DatabaseObject
    {
        [JsonProperty("username")]
        public string Username { get; set; }

        [JsonIgnore]
        public string ApiKey { get; set; }

        [JsonIgnore]
        public byte[] PasswordKey { get; set; }

        [JsonIgnore]
        public byte[] CryptoSalt { get; set; }

        [JsonIgnore]
        public PasswordCryptoConfiguration PasswordCryptoConf { get; set; }

        [JsonIgnore]
        public string Identifier { get; set; }

        public override bool Equals(object obj)
        {
            return Username == ((RegisteredUser) obj).Username;
        }

        public override int GetHashCode()
        {
            return Username.GetHashCode();
        }
    }
}