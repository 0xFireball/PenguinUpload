using System.Collections.Generic;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class LockTableSystem
    {
        public static Dictionary<string, UserLock> UserLockTable = new Dictionary<string, UserLock>();

        
    }
}