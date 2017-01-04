using Newtonsoft.Json;

namespace PenguinUpload.Configuration
{
    public class PenguinUploadConfiguration
    {
        [JsonProperty("uploadDirectory")]
        public string FileUploadDirectory { get; set; } = "data/uploads";

        [JsonProperty("registerEnabled")]
        public bool RegistrationEnabled { get; set; } = false;

        [JsonProperty("inviteKey")]
        public string InviteKey { get; set; } = null;
    }
}