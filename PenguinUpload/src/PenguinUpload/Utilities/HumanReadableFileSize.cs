namespace PenguinUpload.Utilities
{
    public class HumanReadableFileSize
    {
        /// <summary>
        /// http://stackoverflow.com/a/281679
        /// </summary>
        /// <param name="len"></param>
        /// <returns></returns>
        public static string FromLength(double len)
        {
            string[] sizes = {"B", "KiB", "MiB", "GiB", "TiB"};
            var order = 0;
            while (len >= 1024 && order < sizes.Length)
            {
                order++;
                len = len / 1024;
            }

            // Adjust the format string to your preferences. For example "{0:0.#}{1}" would
            // show a single decimal place, and no space.
            return string.Format("{0:0.##} {1}", len, sizes[order]);
        }
    }
}