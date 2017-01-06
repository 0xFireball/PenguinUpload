using System.Threading;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserLock
    {
        private bool _readLock = false;
        private bool _writeLock = false;

        public void ObtainExclusiveWrite()
        {
            var writeAvailableEvent = new AutoResetEvent(!_writeLock);
            writeAvailableEvent.WaitOne();
            _readLock = true;
            _writeLock = true;
        }

        public async Task ObtainExclusiveWriteAsync()
        {
            await Task.Run(() => ObtainExclusiveWrite());
        }

        public void ReleaseExclusiveWrite()
        {
            _readLock = false;
            _writeLock = false;
        }

        public void ObtainExclusiveRead()
        {
            var readAvailableEvent = new AutoResetEvent(!_readLock);
            readAvailableEvent.WaitOne();
            _readLock = true;
//            _writeLock = true;
        }

        public async Task ObtainExclusiveReadAsync()
        {
            await Task.Run(() => ObtainExclusiveRead());
        }

        public void ReleaseExclusiveRead()
        {
            _readLock = false;
//            _writeLock = false;
        }
    }
}