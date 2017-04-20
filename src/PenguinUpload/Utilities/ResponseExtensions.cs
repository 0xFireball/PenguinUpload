using System;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using Nancy;

namespace PenguinUpload.Utilities
{
    public static class ResponseExtensions
    {
        public static Response FromPartialStream(this IResponseFormatter response, Request request, Stream stream,
            string contentType)
        {
            // Store the len
            var len = stream.Length;
            // Create the response now
            var res = response.FromStream(stream, contentType)
                .WithHeader("Connection", "Keep-alive")
                .WithHeader("Accept-ranges", "Bytes");
            // Use the partial status code
            res.StatusCode = HttpStatusCode.PartialContent;
            long startPos = 0;
            foreach (var s in request.Headers["Range"])
            {
                var start = s.Split('=')[1];
                var m = Regex.Match(start, @"(\d+)-(\d+)?");
                start = m.Groups[1].Value;
                var end = len - 1;
                if (!string.IsNullOrWhiteSpace(m.Groups[2]?.Value))
                {
                    end = Convert.ToInt64(m.Groups[2].Value);
                }

                startPos = Convert.ToInt64(start);
                var length = len - startPos;
                res.WithHeader("Content-range", "Bytes " + start + "-" + end + "/" + len);
                res.WithHeader("Content-length", length.ToString(CultureInfo.InvariantCulture));
            }
            stream.Seek(startPos, SeekOrigin.Begin);
            return res;
        }
    }
}