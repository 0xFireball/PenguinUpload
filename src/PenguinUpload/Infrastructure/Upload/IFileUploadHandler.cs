using PenguinUpload.DataModels.Api;
using System.IO;
using System.Threading.Tasks;

namespace PenguinUpload.Infrastructure.Upload
{
    public interface IFileUploadHandler
    {
        Task<FileUploadResult> HandleUploadAsync(string fileName, Stream stream);

        Stream RetrieveFileStream(string id);
    }
}