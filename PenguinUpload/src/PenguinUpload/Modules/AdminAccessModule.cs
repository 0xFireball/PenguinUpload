using Nancy;

namespace PenguinUpload.Modules
{
    public class AdminAccessModule : NancyModule
    {
        public AdminAccessModule() : base("/api/admin")
        {

        }
    }
}