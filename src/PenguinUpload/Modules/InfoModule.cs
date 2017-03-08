using Nancy;

namespace PenguinUpload.Modules
{
    public class InfoModule :  NancyModule
    {
        public InfoModule()
        {
            Get("/tos", _ => PenguinUploadContext.Configuration.TermsOfService);
        }
    }
}
