using Newtonsoft.Json;

namespace PenguinUpload.DataModels.Api
{
    public class FileUploadResult
    {
        [JsonProperty("id")]
        public string FileId { get; set; }
    }
}