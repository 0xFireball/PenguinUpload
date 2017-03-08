using Nancy;

namespace PenguinUpload.Modules
{
    public class MetadataModule : NancyModule
    {
        public IPenguinUploadContext ServerContext;

        public MetadataModule() : base("/meta")
        {
            Get("/version", _ => PenguinUploadContext.Version);
        }
    }
}