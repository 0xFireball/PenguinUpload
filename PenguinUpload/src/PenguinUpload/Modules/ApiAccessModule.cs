using System.Linq;
using Microsoft.CodeAnalysis.CSharp.Syntax;
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

            Delete("/delete/{id}", async args =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var fileId = (string) args.id;
                // Remove physical file
                var fileUploadHandler = new LocalStorageHandler();
                await fileUploadHandler.DeleteFile(fileId);
                // Unregister file
                var storedFilesManager = new StoredFilesManager();
                await storedFilesManager.UnregisterStoredFileAsync(fileId);
                return HttpStatusCode.OK;
            });

            Get("/userfiles", async _ =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var storedFilesManager = new StoredFilesManager();
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                return Response.AsJsonNet(userFiles);
            });

            Delete("/nuke/files", async _ =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var storedFilesManager = new StoredFilesManager();
                var fileUploadHandler = new LocalStorageHandler();
                // Start tasks to nuke user's files
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                var nukePhysicalFilesTask = fileUploadHandler.NukeAllFiles(userFiles.Select(x => x.Identifier));
                var nukeFilesTask = storedFilesManager.NukeAllFiles(user);
                return HttpStatusCode.OK;
            });

            Delete("/nuke/user", async _ =>
            {
                var userManager = new WebUserManager();
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                // Disable user
                await userManager.DisableUser(user);
                var storedFilesManager = new StoredFilesManager();
                var fileUploadHandler = new LocalStorageHandler();
                // Start tasks to nuke user's files
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                var nukePhysicalFilesTask = fileUploadHandler.NukeAllFiles(userFiles.Select(x => x.Identifier));
                var nukeFilesTask = storedFilesManager.NukeAllFiles(user);
                await nukeFilesTask;
                await nukePhysicalFilesTask;
                // Now nuke the user
                await userManager.RemoveUser(user.Username);
                return HttpStatusCode.OK;
            });
        }
    }
}