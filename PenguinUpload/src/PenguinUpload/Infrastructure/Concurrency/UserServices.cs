namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserServices
    {
        public string Username { get; }
        public UserLock UserLock { get; }
        public UploadThrottle UploadThrottle { get; }

        public UserServices(string username)
        {
            Username = username;
            UserLock = new UserLock();
            UploadThrottle = new UploadThrottle(PenguinUploadRegistry.Configuration.UserMaxConcurrentUploads);
        }
    }
}