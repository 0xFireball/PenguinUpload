using Nancy;
using Nancy.Responses;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Services.FileStorage;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class AdHocApiAccessModule : NancyModule
    {
        public IPenguinUploadContext ServerContext { get; set; }

        public AdHocApiAccessModule(IPenguinUploadContext serverContext) : base("/api")
        {
            ServerContext = serverContext;
            Get("/fileinfo/{idPass}", async args =>
            {
                var idParts = ((string)args.idPass).Split('!');
                var id = idParts[0];
                string pass = null;
                if (idParts.Length > 1)
                {
                    pass = idParts[1];
                }
                var storedFilesManager = new StoredFilesManager(ServerContext);
                var storedFile = await storedFilesManager.GetPublicStoredFileByIdentifierAsync(id);
                if (storedFile == null) return HttpStatusCode.NotFound;
                if (storedFile.IsPasswordProtected)
                {
                    if (pass == null) return HttpStatusCode.Unauthorized;
                    // Make sure password matches
                    if (!storedFile.CheckPassword(pass))
                    {
                        return HttpStatusCode.Unauthorized;
                    }
                }
                return Response.AsJsonNet(storedFile);
            });

            Get("/download/{idPass}", async args =>
            {
                var idParts = ((string)args.idPass).Split('!');
                var id = idParts[0];
                string pass = null;
                if (idParts.Length > 1)
                {
                    pass = idParts[1];
                }
                var storedFilesManager = new StoredFilesManager(ServerContext);
                var storedFile = await storedFilesManager.GetPublicStoredFileByIdentifierAsync(id);
                if (storedFile == null) return HttpStatusCode.NotFound;
                if (storedFile.IsPasswordProtected)
                {
                    // Make sure password matches
                    if (!storedFile.CheckPassword(pass))
                    {
                        return HttpStatusCode.Unauthorized;
                    }
                }

                // Create unauthenticated storage handler without admin permissions
                // This is OK because download operatiotn does not affect quota.
                var fileUploadHandler = new LocalStorageHandler(ServerContext, null, false);
                var fileStream = fileUploadHandler.RetrieveFileStream(storedFile.Identifier);
                var response = new StreamResponse(() => fileStream, MimeTypes.GetMimeType(storedFile.Name));
                return response.AsAttachment(storedFile.Name);
            });
        }
    }
}