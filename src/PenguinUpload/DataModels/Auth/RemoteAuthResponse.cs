using Newtonsoft.Json;

namespace PenguinUpload.DataModels.Auth
{
    public class RemoteAuthResponse
    {
        [JsonProperty("user")]
        public RegisteredUser User { get; set; }

        [JsonProperty("apikey")]
        public string ApiKey { get; set; }
    }
}