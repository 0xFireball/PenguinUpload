using PenguinUpload.Configuration;
using PenguinUpload.Infrastructure.Concurrency;
using System.Linq;

namespace PenguinUpload
{
    public class PenguinUploadContext : IPenguinUploadContext
    {
        public PenguinUploadContext(PenguinUploadConfiguration configuration)
        {
            Configuration = configuration;
            ServiceTable = new UserServiceTable(this);
        }

        public PenguinUploadConfiguration Configuration { get; set; } = new PenguinUploadConfiguration();

        public static string Version = Microsoft.Extensions.PlatformAbstractions
            .PlatformServices.Default.Application.ApplicationVersion;

        public bool IsAdministrator(string username)
        {
            return Configuration.Admins.Contains(username);
        }

        public UserServiceTable ServiceTable { get; }
    }
}