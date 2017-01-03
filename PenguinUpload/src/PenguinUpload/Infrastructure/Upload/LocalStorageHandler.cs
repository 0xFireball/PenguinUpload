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
            _rootPathProvider = rootPathProvider;
        }

        public async Task<FileUploadResult> HandleUpload(string fileName, Stream stream)
        {
            var fileId = Guid.NewGuid().ToString();
            var targetFile = GetTargetFilePath(fileId);

            using (var destinationStream = File.Create(targetFile))
            {
                await stream.CopyToAsync(destinationStream);
            }

            return new FileUploadResult
            {
                FileId = fileId,
                Size = stream.Length
            };
        }

        private string GetTargetFilePath(string fileIdentifier)
        {
            return Path.Combine(GetUploadDirectory(), fileIdentifier);
        }

        private string GetUploadDirectory()
        {
            var uploadDirectory = Path.Combine(PenguinUploadRegistry.Configuration.FileUploadDirectory);

            Directory.CreateDirectory(uploadDirectory);

            return uploadDirectory;
        }

        public Stream RetrieveFileStream(string id)
        {
            var filePath = GetTargetFilePath(id);
            return File.OpenRead(filePath);
        }
    }
}