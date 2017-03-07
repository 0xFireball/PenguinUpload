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

        [JsonProperty("admins")]
        public string[] Administrators { get; set; } = new string[0];

        [JsonProperty("userMaxConcurrentUploads")]
        public int UserMaxConcurrentUploads { get; set; } = 4;

        /// <summary>
        /// Max file storage quota (in bytes)
        /// </summary>
        [JsonProperty("defaultQuota")]
        public long? DefaultQuota { get; set; } = 1 << 30; // (1 GiB NOT 1 GB [see GIBIBYTES]). 1073741824 bytes

        [JsonProperty("tosText")]
        public string TermsOfService { get; set; } = "Terms of service";
    }
}