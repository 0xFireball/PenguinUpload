using System.Threading;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UploadThrottle
    {
        private readonly Semaphore _throttle;

        public UploadThrottle(int maxConcurrent)
        {
            _throttle = new Semaphore(0, maxConcurrent);
        }

        public void Acquire()
        {
            _throttle.WaitOne();
        }

        public async Task AcquireAsync()
        {
            await Task.Run(() => Acquire());
        }

        public void Release()
        {
            _throttle.Release();
        }

        public async Task WithResource(Task action)
        {
            await AcquireAsync();
            await action;
            Release();
        }
    }
}