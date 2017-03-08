using Nancy;

namespace PenguinUpload.Modules
{
    public class InfoModule : NancyModule
    {
        public IPenguinUploadContext ServerContext { get; set; }

        public InfoModule(IPenguinUploadContext serverContext)
        {
            ServerContext = serverContext;
            Get("/tos", _ => ServerContext.Configuration.TermsOfService);
        }
    }
}