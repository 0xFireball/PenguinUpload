using System;
using System.Threading;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserLock
    {
        private readonly AutoResetEvent _readFree = new AutoResetEvent(true);
        private readonly AutoResetEvent _writeFree = new AutoResetEvent(true);

        #region Basic Functionality

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

        #endregion Basic Functionality

        #region Nicer API

        public async Task WithExclusiveWriteAsync(Task action)
        {
            await ObtainExclusiveWriteAsync();
            await action;
            ReleaseExclusiveWrite();
        }

        public async Task WithExclusiveWriteAsync(Func<Task> action)
        {
            await ObtainExclusiveWriteAsync();
            await action();
            ReleaseExclusiveWrite();
        }

        public async Task WithExclusiveReadAsync(Task action)
        {
            await ObtainExclusiveReadAsync();
            await action;
            ReleaseExclusiveRead();
        }

        public async Task WithExclusiveReadAsync(Func<Task> action)
        {
            await ObtainExclusiveReadAsync();
            await action();
            ReleaseExclusiveRead();
        }

        public async Task WithConcurrentReadAsync(Task action)
        {
            await ObtainConcurrentReadAsync();
            await action;
            ReleaseConcurrentRead();
        }

        public async Task WithConcurrentReadAsync(Func<Task> action)
        {
            await ObtainConcurrentReadAsync();
            await action();
            ReleaseConcurrentRead();
        }

        #endregion Nicer API
    }
}