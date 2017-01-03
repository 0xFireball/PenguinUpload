using Nancy;
using Nancy.ModelBinding;
using PenguinUpload.Infrastructure.Upload;
using PenguinUpload.Utilities;

namespace PenguinUpload.DataModels.Api
{
    public class AdHocAccessModule : NancyModule
    {
        private readonly IFileUploadHandler _fileUploadHandler;

        public AdHocAccessModule(IFileUploadHandler fileUploadHandler) : base("/api")
        {
            _fileUploadHandler = fileUploadHandler;
            Post("/upload", async _ =>
            {
                var request = this.Bind<FileUploadRequest>();

                var uploadResult = await _fileUploadHandler.HandleUpload(request.File.Name, request.File.Value);

                return Response.AsJsonNet(uploadResult);
            });
        }
    }
}