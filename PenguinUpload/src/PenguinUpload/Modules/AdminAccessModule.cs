using System.Linq;
using Nancy;
using Nancy.Responses;
using Nancy.Security;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Services.FileStorage;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class AdminAccessModule : NancyModule
    {
        public AdminAccessModule() : base("/api/admin")
        {
            this.RequiresAuthentication();
            // Requires API key access
            this.RequiresClaims(x => x.Value == ApiClientAuthenticationService.StatelessAuthClaim.Value);

            Before += (ctx) =>
            {
                // Make sure user is an admin
                if (!PenguinUploadRegistry.Configuration.Administrators.Contains(Context.CurrentUser.Identity.Name))
                {
                    return HttpStatusCode.Unauthorized;
                }
                return null;
            };

            // List all users
            Get("/enumerateusers", async _ =>
            {
                var webUserManager = new WebUserManager();
                var allUsers = await webUserManager.GetAllUsersAsync();
                return Response.AsJsonNet(allUsers);
            });

            // Get user account info
            Get("/accountinfo/{name}", async args =>
            {
                var userManager = new WebUserManager();
                var user = await userManager.FindUserByUsernameAsync((string) args.name);
                return user == null ? HttpStatusCode.NotFound : Response.AsJsonNet(user);
            });

            // Disable a user's account
            Patch("/disableuser/{name}", async args =>
            {
                var userManager = new WebUserManager();
                var user = await userManager.FindUserByUsernameAsync((string) args.name);
                if (user == null) return HttpStatusCode.BadRequest;
                // Disable user
                await userManager.SetEnabled(user, false);
                return HttpStatusCode.OK;
            });

            // Enable a user's account
            Patch("/enableuser/{name}", async args =>
            {
                var userManager = new WebUserManager();
                var user = await userManager.FindUserByUsernameAsync((string) args.name);
                if (user == null) return HttpStatusCode.BadRequest;
                // Disable user
                await userManager.SetEnabled(user, true);
                return HttpStatusCode.OK;
            });

            // Get file info (admin override)
            Get("/fileinfo/{id}", async args =>
            {
                var fileId = (string) args.id;
                // Get metadata
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier(fileId);
                return Response.AsJsonNet(storedFile);
            });

            // Download a file (admin override)
            Get("/downloadfile/{id}", async args =>
            {
                var fileId = (string) args.id;
                // Get metadata
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier(fileId);
                if (storedFile == null) return HttpStatusCode.NotFound;
                var fileUploadHandler = new LocalStorageHandler();
                var fileStream = fileUploadHandler.RetrieveFileStream(storedFile.Identifier);
                var response = new StreamResponse(() => fileStream, MimeTypes.GetMimeType(storedFile.Name));
                return response.AsAttachment(storedFile.Name);
            });

            // Delete a file (admin override)
            Delete("/deletefile/{id}", async args =>
            {
                var fileId = (string) args.id;
                // Remove physical file
                var fileUploadHandler = new LocalStorageHandler();
                await fileUploadHandler.DeleteFile(fileId);
                // Unregister file
                var storedFilesManager = new StoredFilesManager();
                await storedFilesManager.UnregisterStoredFileAsync(fileId);
                return HttpStatusCode.OK;
            });
        }
    }
}