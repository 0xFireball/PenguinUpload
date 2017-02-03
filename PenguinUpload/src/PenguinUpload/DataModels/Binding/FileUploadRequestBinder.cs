using Nancy;
using Nancy.ModelBinding;
using PenguinUpload.DataModels.Api;
using System;
using System.Linq;

namespace PenguinUpload.DataModels.Binding
{
    public class FileUploadRequestBinder : IModelBinder
    {
        public object Bind(NancyContext context, Type modelType, object instance, BindingConfig configuration,
            params string[] blackList)
        {
            var fileUploadRequest = (instance as FileUploadRequest) ?? new FileUploadRequest();

            var form = context.Request.Form;

            fileUploadRequest.ApiKey = form["apikey"];
            fileUploadRequest.File = context.Request.Files.FirstOrDefault();
            fileUploadRequest.TargetDirectory = (form["dir"] as string) ?? "/"; // Read path, or use default

            return fileUploadRequest;
        }

        public bool CanBind(Type modelType)
        {
            return modelType == typeof(FileUploadRequest);
        }
    }
}