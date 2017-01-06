using System.Collections.Generic;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserServiceTable
    {
        private Dictionary<string, UserServices> ServiceTable = new Dictionary<string, UserServices>();

        public UserServices GetOrCreate(string username)
        {
            lock (ServiceTable)
            {
                if (ServiceTable.ContainsKey(username))
                {
                    return ServiceTable[username];
                }
                var ret = new UserServices(username);
                ServiceTable[username] = ret;
                return ret;
            }
        }

        public UserServices this[string username] => GetOrCreate(username);
    }
}