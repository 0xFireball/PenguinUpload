namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserServices
    {
        public string Username { get; }
        public UserLock UserLock { get; }

        public UserServices(string username)
        {
            Username = username;
            UserLock = new UserLock();
        }
    }
}