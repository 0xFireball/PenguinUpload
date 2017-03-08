using Newtonsoft.Json;

namespace PenguinUpload.Configuration
{
    public class PenguinUploadConfiguration
    {
        [JsonProperty("uploadDirectory")]
        public string UploadDirectory { get; set; } = "data/uploads";

        [JsonProperty("registerEnabled")]
        public bool RegisterEnabled { get; set; } = false;

        [JsonProperty("inviteKey")]
        public string InviteKey { get; set; } = null;

        [JsonProperty("admins")]
        public string[] Admins { get; set; } = new string[0];

        /// <summary>
        /// Max file storage quota (in bytes)
        /// </summary>
        [JsonProperty("defaultQuota")]
        public long? DefaultQuota { get; set; } = 1 << 30; // (1 GiB NOT 1 GB [see GIBIBYTES]). 1073741824 bytes

        [JsonProperty("termsOfService")]
        public string TermsOfService { get; set; } = "Terms of service";
    }
}