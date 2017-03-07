using Newtonsoft.Json;
using System.Collections.Generic;

namespace PenguinUpload.DataModels.Files
{
    public class DirectoryStructure
    {
        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("dirs")]
        public List<DirectoryStructure> SubDirectories { get; set; } = new List<DirectoryStructure>();

        [JsonProperty("files")]
        public List<StoredFile> Files { get; set; } = new List<StoredFile>();
    }
}