using Newtonsoft.Json;

namespace PenguinUpload.DataModels.Api
{
    public class FileUploadResult
    {
        [JsonProperty("fileId")]
        public string FileId { get; set; }

        [JsonProperty("size")]
        public double Size { get; set; }
    }
}