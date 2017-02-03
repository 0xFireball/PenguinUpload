using PenguinUpload.DataModels.Files;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PenguinUpload.Services.FileStorage
{
    public static class FileOrganization
    {
        private static string[] GetPathSegments(string path)
        {
            return path.Split(new[] { "/" }, StringSplitOptions.RemoveEmptyEntries);
        }

        private static string JoinPathSegments(string[] segments)
        {
            return string.Join("/", segments);
        }

        public static async Task<DirectoryStructure> BuildStructure(IEnumerable<StoredFile> files)
        {
            var dirStructure = new DirectoryStructure
            {
                Path = "/"
            };
            foreach (var file in files)
            {
                var pathSegments = GetPathSegments(file.UserPath);
                var targetPathSegmentCount = 0;
                if (pathSegments.Length > 0)
                {
                    for (int segmentCount = 0;
                        !dirStructure.SubDirectories.Any(x => x.Path == JoinPathSegments(pathSegments.Take(segmentCount).ToArray()));
                        segmentCount++)
                    {
                        targetPathSegmentCount = segmentCount;
                    }
                }
                var parent = dirStructure;
                for (int i = 0; i < targetPathSegmentCount; i++)
                {
                    var currentSegment = pathSegments[i];
                    var nextChild = new DirectoryStructure
                    {
                        Name = currentSegment,
                        Path = parent.Path + currentSegment
                    };
                    dirStructure.SubDirectories.Add(nextChild);
                    parent = nextChild;
                }
                parent.Files.Add(file);
            }
            return dirStructure;
        }
    }
}