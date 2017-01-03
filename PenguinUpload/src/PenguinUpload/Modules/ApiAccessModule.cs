using Nancy;
using Nancy.ModelBinding;
using Nancy.Security;
using PenguinUpload.DataModels.Api;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class ApiAccessModule : NancyModule
    {
        private readonly IFileUploadHandler _fileUploadHandler;

        public ApiAccessModule(IFileUploadHandler fileUploadHandler) : base("/api")
        {
            _fileUploadHandler = fileUploadHandler;

            this.RequiresAuthentication();
            this.RequiresClaims(x => x.Value == ApiClientAuthenticationService.StatelessAuthClaim.Value);

            Get("/userinfo", async _ =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                return Response.AsJsonNet(user);
            });

            Post("/upload", async _ =>
            {
                var request = this.Bind<FileUploadRequest>();

                var uploadResult = await _fileUploadHandler.HandleUpload(request.File.Name, request.File.Value);

                return Response.AsJsonNet(uploadResult);
            });
        }
    }
}