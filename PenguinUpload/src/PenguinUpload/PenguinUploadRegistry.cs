using PenguinUpload.Configuration;

namespace PenguinUpload
{
    public static class PenguinUploadRegistry
    {
        public const string ConfigFileName = "penguinupload.config.json";
        public static PenguinUploadConfiguration Configuration { get; set; } = new PenguinUploadConfiguration();
    }
}