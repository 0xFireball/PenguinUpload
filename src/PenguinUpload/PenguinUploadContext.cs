using PenguinUpload.Configuration;
using PenguinUpload.Infrastructure.Concurrency;
using System.Linq;

namespace PenguinUpload
{
    public static class PenguinUploadContext
    {
        public const string ConfigFileName = "penguinupload.config.json";
        public static PenguinUploadConfiguration Configuration { get; set; } = new PenguinUploadConfiguration();

        public static string Version = Microsoft.Extensions.PlatformAbstractions
            .PlatformServices.Default.Application.ApplicationVersion;

        public static bool IsAdministrator(string username)
        {
            return Configuration.Admins.Contains(username);
        }

        public static UserServiceTable ServiceTable { get; } = new UserServiceTable();
    }
}