using Newtonsoft.Json;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Authentication;
using System;
using System.Collections;

namespace PenguinUpload.DataModels.Files
{
    public class PublicFile
    {
        [JsonProperty("fileId")]
        public string Identifier { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("uploadDate")]
        public DateTime UploadedDate { get; set; } = DateTime.Now;

        [JsonProperty("hrSize")]
        public string HumanReadableSize { get; set; }

        [JsonIgnore]
        public ItemCrypto Crypto { get; set; }

        [JsonProperty("locked")]
        public bool IsPasswordProtected => Crypto != null;

        public bool CheckPassword(string pass)
        {
            var cryptoHelper = new AuthCryptoHelper(Crypto.Conf);
            var inputPass = cryptoHelper.CalculateUserPasswordHash(pass, Crypto.Salt);
            return StructuralComparisons.StructuralEqualityComparer.Equals(inputPass, Crypto.Key);
        }
    }
}