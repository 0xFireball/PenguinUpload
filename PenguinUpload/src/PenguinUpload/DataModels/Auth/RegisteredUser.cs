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

        /// <summary>
        /// Storage quota in bytes
        /// </summary>
        [JsonProperty("quota")]
        public long? StorageQuota { get; set; } = PenguinUploadRegistry.Configuration.DefaultQuota;

        /// <summary>
        ///  Storage usage in bytes
        /// </summary>
        [JsonProperty("usage")]
        public long StorageUsage { get; set; } = 0;

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

        [JsonIgnore]
        public bool Enabled { get; set; } = true;
    }
}