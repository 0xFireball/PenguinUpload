using PenguinUpload.Configuration;

namespace PenguinUpload
{
    public static class PenguinUploadRegistry
    {
        public static PenguinUploadConfiguration Configuration { get; set; } = new PenguinUploadConfiguration();
    }
}