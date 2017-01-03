using System.IO;
using System.Threading.Tasks;
using PenguinUpload.DataModels.Api;

namespace PenguinUpload.Infrastructure.Upload
{
    public interface IFileUploadHandler
    {
        Task<FileUploadResult> HandleUpload(string fileName, Stream stream);
        Stream RetrieveFileStream(string id);
    }
}