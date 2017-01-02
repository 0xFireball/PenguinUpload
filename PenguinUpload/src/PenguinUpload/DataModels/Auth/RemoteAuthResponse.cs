using Newtonsoft.Json;
using PenguinUpload.Services.Authentication;

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