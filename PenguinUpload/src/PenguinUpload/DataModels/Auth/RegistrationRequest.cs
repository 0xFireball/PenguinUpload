namespace PenguinUpload.DataModels.Auth
{
    public class RegistrationRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
    }
}