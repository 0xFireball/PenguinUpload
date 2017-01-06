using System;
using System.Linq;
using Nancy;
using Nancy.ModelBinding;
using Nancy.Responses;
using Nancy.Security;
using PenguinUpload.DataModels.Api;
using PenguinUpload.Infrastructure.Concurrency;
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
            // Requires API key access
            this.RequiresClaims(x => x.Value == ApiClientAuthenticationService.StatelessAuthClaim.Value);

            var userManager = new WebUserManager();

            // Get user metadata
            Get("/userinfo", async _ =>
            {
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                return Response.AsJsonNet(user);
            });

            // Generate new API key
            Patch("/newkey", async _ =>
            {
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                // Update key
                await userManager.GenerateNewApiKeyAsync(user);
                return Response.AsJsonNet(user);
            });

            // Get list of files
            Get("/userfiles", async _ =>
            {
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var storedFilesManager = new StoredFilesManager();
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                return Response.AsJsonNet(userFiles);
            });

            // Upload a file
            Post("/upload", async _ =>
            {
                var request = this.Bind<FileUploadRequest>();
                var fileUploadHandler = new LocalStorageHandler(Context.CurrentUser.Identity.Name);
                FileUploadResult uploadResult;
                try
                {
                    uploadResult = await fileUploadHandler.HandleUpload(request.File.Name, request.File.Value);
                }
                catch (QuotaExceededException qEx)
                {
                    return Response.AsText(qEx.Message).WithStatusCode(HttpStatusCode.Forbidden);
                }

                // Register uploaded file
                var storedFilesManager = new StoredFilesManager();
                var storedFile =
                    await storedFilesManager.RegisterStoredFileAsync(Context.CurrentUser.Identity.Name,
                        request.File.Name, uploadResult.FileId,
                        uploadResult.Size);

                return Response.AsJsonNet(storedFile);
            });

            // Force download, bypass password
            Get("/fdownload/{id}", async args =>
            {
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier((string) args.id);
                if (storedFile == null) return HttpStatusCode.NotFound;

                var fileUploadHandler = new LocalStorageHandler(Context.CurrentUser.Identity.Name);
                var fileStream = fileUploadHandler.RetrieveFileStream(storedFile.Identifier);
                var response = new StreamResponse(() => fileStream, MimeTypes.GetMimeType(storedFile.Name));
                return response.AsAttachment(storedFile.Name);
            });

            // Set a password on a file
            Patch("/lock/{idPass}", async args =>
            {
                var idParts = ((string) args.idPass).Split('!');
                if (idParts.Length < 2) return HttpStatusCode.BadRequest;
                var id = idParts[0];
                var pass = idParts[1];
                // Update file metadata
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier(id);
                if (storedFile == null) return HttpStatusCode.BadRequest;
                await storedFilesManager.SetFilePassword(storedFile, pass);
                return HttpStatusCode.OK;
            });

            // Unset a password on a file
            Patch("/unlock/{id}", async args =>
            {
                var id = (string) args.id;
                // Update file metadata
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier(id);
                if (storedFile == null) return HttpStatusCode.BadRequest;
                await storedFilesManager.SetFilePassword(storedFile, null);
                return HttpStatusCode.OK;
            });

            // Delete a file
            Delete("/delete/{id}", async args =>
            {
                var fileId = (string) args.id;
                // Remove physical file
                var fileUploadHandler = new LocalStorageHandler(Context.CurrentUser.Identity.Name);
                await fileUploadHandler.DeleteFile(fileId);
                // Unregister file
                var storedFilesManager = new StoredFilesManager();
                await storedFilesManager.UnregisterStoredFileAsync(fileId);
                return HttpStatusCode.OK;
            });

            // Nuke (batch destroy)

            // Delete all a user's files
            Delete("/nuke/files", async _ =>
            {
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                var storedFilesManager = new StoredFilesManager();
                var fileUploadHandler = new LocalStorageHandler(Context.CurrentUser.Identity.Name);
                // Start tasks to nuke user's files
                var userFiles = await storedFilesManager.GetStoredFilesByUser(user);
                var nukePhysicalFilesTask = fileUploadHandler.NukeAllFiles(userFiles.Select(x => x.Identifier));
                var nukeFilesTask = storedFilesManager.NukeAllFiles(user);
                return HttpStatusCode.OK;
            });

            // Delete a user and all content
            Delete("/nuke/user", async _ =>
            {
                var user = await userManager.FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                // Disable user
                await userManager.SetEnabled(user, false);
                var storedFilesManager = new StoredFilesManager();
                var fileUploadHandler = new LocalStorageHandler(Context.CurrentUser.Identity.Name);
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