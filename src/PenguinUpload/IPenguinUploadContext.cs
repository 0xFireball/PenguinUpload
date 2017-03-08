using PenguinUpload.Configuration;
using PenguinUpload.Infrastructure.Concurrency;

namespace PenguinUpload
{
    public interface IPenguinUploadContext
    {
        PenguinUploadConfiguration Configuration { get; set; }
        UserServiceTable ServiceTable { get; }

        bool IsAdministrator(string username);
    }
}