using Newtonsoft.Json;

namespace PenguinUpload.Configuration
{
    public class PenguinUploadConfiguration
    {
        [JsonProperty("uploadDirectory")]
        public string FileUploadDirectory { get; set; } = "data/uploads";
    }
}