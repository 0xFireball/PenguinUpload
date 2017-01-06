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
            // Wait for exclusive read and write
            _writeFree.WaitOne();
            _readFree.WaitOne();
        }

        public async Task ObtainExclusiveWriteAsync()
        {
            await Task.Run(() => ObtainExclusiveWrite());
        }

        public void ReleaseExclusiveWrite()
        {
            // Release exclusive read and write
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

        public void ObtainConcurrentRead()
        {
            // Lock writing, and allow multiple concurrent reads
            _writeFree.WaitOne();
        }

        public async Task ObtainConcurrentReadAsync()
        {
            await Task.Run(() => ObtainConcurrentRead());
        }

        public void ReleaseConcurrentRead()
        {
            // Allow writing again
            _writeFree.Set();
        }
    }
}