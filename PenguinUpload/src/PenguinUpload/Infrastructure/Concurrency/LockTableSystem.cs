using System.Collections.Generic;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class LockTableSystem
    {
        public Dictionary<string, UserLock> UserLockTable = new Dictionary<string, UserLock>();

        public UserLock GetOrCreate(string username)
        {
            lock (UserLockTable)
            {
                if (UserLockTable.ContainsKey(username))
                {
                    return UserLockTable[username];
                }
                var ret = new UserLock();
                UserLockTable[username] = ret;
                return ret;
            }
        }
    }
}