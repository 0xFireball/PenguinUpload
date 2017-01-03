using System;
using Newtonsoft.Json;

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
    }
}