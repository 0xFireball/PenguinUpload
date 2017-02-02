using Newtonsoft.Json;
using System;

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
        public string Password { get; set; }

        [JsonProperty("locked")]
        public bool IsPasswordProtected => Password != null;
    }
}