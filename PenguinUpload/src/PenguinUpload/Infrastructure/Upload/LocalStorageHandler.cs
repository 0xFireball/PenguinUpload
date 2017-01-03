using System;
using System.IO;
using System.Threading.Tasks;
using Nancy;
using PenguinUpload.DataModels.Api;

namespace PenguinUpload.Infrastructure.Upload
{
    public class LocalStorageHandler : IFileUploadHandler
    {
        private readonly IRootPathProvider _rootPathProvider;

        public LocalStorageHandler(IRootPathProvider rootPathProvider)
        {
            this._rootPathProvider = rootPathProvider;
        }

        public async Task<FileUploadResult> HandleUpload(string fileName, System.IO.Stream stream)
        {
            var fileId = Guid.NewGuid().ToString();
            var targetFile = GetTargetFile(fileId);

            using (var destinationStream = File.Create(targetFile))
            {
                await stream.CopyToAsync(destinationStream);
            }

            return new FileUploadResult()
            {
                FileId = fileId
            };
        }

        private string GetTargetFile(string fileName)
        {
            return Path.Combine(GetUploadDirectory(), fileName);
        }

        private string GetUploadDirectory()
        {
            var uploadDirectory = Path.Combine(_rootPathProvider.GetRootPath(),
                PenguinUploadRegistry.Configuration.FileUploadDirectory);

            if (!Directory.Exists(uploadDirectory))
            {
                Directory.CreateDirectory(uploadDirectory);
            }

            return uploadDirectory;
        }
    }
}