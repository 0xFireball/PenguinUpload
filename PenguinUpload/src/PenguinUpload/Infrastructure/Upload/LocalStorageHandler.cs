using System;
using System.IO;
using System.Threading.Tasks;
using Nancy;
using PenguinUpload.DataModels.Api;

namespace PenguinUpload.Infrastructure.Upload
{
    public class LocalStorageHandler : IFileUploadHandler
    {
        private readonly IRootPathProvider rootPathProvider;

        public LocalStorageHandler(IRootPathProvider rootPathProvider)
        {
            this.rootPathProvider = rootPathProvider;
        }

        public async Task<FileUploadResult> HandleUpload(string fileName, System.IO.Stream stream)
        {
            string uuid = GetFileName();
            string targetFile = GetTargetFile(uuid);

            using (FileStream destinationStream = File.Create(targetFile))
            {
                await stream.CopyToAsync(destinationStream);
            }

            return new FileUploadResult()
            {
                FileId = uuid
            };
        }

        private string GetTargetFile(string fileName)
        {
            return Path.Combine(GetUploadDirectory(), fileName);
        }

        private string GetFileName()
        {
            return Guid.NewGuid().ToString();
        }

        private string GetUploadDirectory()
        {
            var uploadDirectory = Path.Combine(rootPathProvider.GetRootPath(), PenguinUploadRegistry.Configuration.FileUploadDirectory);

            if (!Directory.Exists(uploadDirectory))
            {
                Directory.CreateDirectory(uploadDirectory);
            }

            return uploadDirectory;
        }
    }