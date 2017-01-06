using System.Threading;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserLock
    {
        private readonly AutoResetEvent _readFree = new AutoResetEvent(true);
        private readonly AutoResetEvent _writeFree = new AutoResetEvent(true);

        public void ObtainExclusiveWrite()
        {
            _writeFree.WaitOne();
            _readFree.WaitOne();
        }

        public async Task ObtainExclusiveWriteAsync()
        {
            await Task.Run(() => ObtainExclusiveWrite());
        }

        public void ReleaseExclusiveWrite()
        {
            _writeFree.Set();
            _readFree.Set();
        }

        public void ObtainExclusiveRead()
        {
            _readFree.WaitOne();
        }

        public async Task ObtainExclusiveReadAsync()
        {
            await Task.Run(() => ObtainExclusiveRead());
        }

        public void ReleaseExclusiveRead()
        {
            _readFree.Set();
        }
    }
}