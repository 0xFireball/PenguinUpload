using Nancy;
using Nancy.ModelBinding;
using Nancy.Security;
using PenguinUpload.DataModels.Api;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Services.FileStorage;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class ApiAccessModule : NancyModule
    {
        public ApiAccessModule() : base("/api")
        {
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

                var fileUploadHandler = new LocalStorageHandler();
                var uploadResult = await fileUploadHandler.HandleUpload(request.File.Name, request.File.Value);

                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);

                // Register uploaded file
                var storedFilesManager = new StoredFilesManager();
                var storedFile =
                    await storedFilesManager.RegisterStoredFileAsync(user, request.File.Name, uploadResult.FileId,
                        uploadResult.Size);

                return Response.AsJsonNet(storedFile);
            });

            Get("/userfiles", async _ =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var storedFilesManager = new StoredFilesManager();
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                return Response.AsJsonNet(userFiles);
            });
        }
    }
}