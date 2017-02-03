using LiteDB;
using Newtonsoft.Json;
using PenguinUpload.DataModels.Auth;
using System;

namespace PenguinUpload.DataModels.Files
{
    public class StoredFile : DatabaseObject
    {
        [JsonProperty("fileId")]
        public string Identifier { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("uploadDate")]
        public DateTime UploadedDate { get; set; } = DateTime.Now;

        [JsonProperty("size")]
        public long FileSize { get; set; }

        [JsonProperty("path")]
        public string UserPath { get; set; }

        [JsonIgnore]
        public string OwnerUsername { get; set; }

        [JsonIgnore]
        public ItemCrypto Crypto { get; set; }

        [BsonIgnore]
        [JsonProperty("locked")]
        public bool IsPasswordProtected => Crypto != null;
    }
}