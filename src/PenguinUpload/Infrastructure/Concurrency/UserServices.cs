﻿namespace PenguinUpload.Infrastructure.Concurrency
{
    public class UserServices
    {
        public string Username { get; }

        /// <summary>
        /// Read/write concurrency lock system
        /// </summary>
        public UserLock UserLock { get; }

        /// <summary>
        /// Throttle concurrent uploads
        /// </summary>
        public ResourceThrottle UploadThrottle { get; }

        public UserServices(string username, int uploadThrottleLimit)
        {
            Username = username;
            UserLock = new UserLock();
            UploadThrottle = new ResourceThrottle(uploadThrottleLimit);
        }
    }
}