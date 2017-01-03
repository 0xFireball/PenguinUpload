using Nancy;
using Nancy.Responses;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Services.FileStorage;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class AdHocApiAccessModule : NancyModule
    {
        public AdHocApiAccessModule() : base("/api")
        {
            Get("/fileInfo/{id}", async args =>
            {
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier((string) args.id);
                return storedFile == null ? HttpStatusCode.NotFound : Response.AsJsonNet(storedFile);
            });

            Get("/download/{id}", async args =>
            {
                var storedFilesManager = new StoredFilesManager();
                var storedFile = await storedFilesManager.GetStoredFileByIdentifier((string) args.id);
                if (storedFile == null) return HttpStatusCode.NotFound;

                var fileUploadHandler = new LocalStorageHandler();
                var fileStream = fileUploadHandler.RetrieveFileStream(storedFile.Identifier);
                var response = new StreamResponse(() => fileStream, MimeTypes.GetMimeType(storedFile.Name));
                return response.AsAttachment(storedFile.Name);
            });
        }
    }
}