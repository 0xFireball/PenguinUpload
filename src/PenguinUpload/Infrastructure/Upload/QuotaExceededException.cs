using System;

namespace PenguinUpload.Infrastructure.Upload
{
    public class QuotaExceededException : Exception
    {
        public QuotaExceededException() : this("File storage quota exceeded")
        {
        }

        public QuotaExceededException(string message) : base(message)
        {
        }
    }
}