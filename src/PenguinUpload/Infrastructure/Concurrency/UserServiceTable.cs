using System.Collections.Generic;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserServiceTable
    {
        public IPenguinUploadContext ServerContext { get; set; }

        public UserServiceTable(IPenguinUploadContext serverContext)
        {
            ServerContext = serverContext;
        }

        private Dictionary<string, UserServices> ServiceTable = new Dictionary<string, UserServices>();

        public UserServices GetOrCreate(string username)
        {
            lock (ServiceTable)
            {
                if (ServiceTable.ContainsKey(username))
                {
                    return ServiceTable[username];
                }
                var ret = new UserServices(username, ServerContext.Configuration.UserMaxConcurrentUploads);
                ServiceTable[username] = ret;
                return ret;
            }
        }

        public UserServices this[string username] => GetOrCreate(username);
    }
}