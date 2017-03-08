using Nancy;

namespace PenguinUpload.Modules
{
    public class MetadataModule : NancyModule
    {
        public MetadataModule() : base("/meta")
        {
            Get("/version", _ => PenguinUploadContext.Version);
        }
    }
}