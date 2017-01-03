using System;
using LiteDB;
using Newtonsoft.Json;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Database;

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

        [JsonProperty("hrSize")]
        public string HumanReadableSize { get; set; }

        [JsonIgnore]
        [BsonRef(DatabaseAccessService.UsersCollectionDatabaseKey)]
        public RegisteredUser Owner { get; set; }
    }
}