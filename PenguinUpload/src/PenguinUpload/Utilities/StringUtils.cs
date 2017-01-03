using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace PenguinUpload.Utilities
{
    public class StringUtils
    {
        public static string SecureRandomString(int maxSize)
        {
            var chars = new char[62];
            chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
            var data = new byte[1];
            using (var prng = RandomNumberGenerator.Create())
            {
                prng.GetBytes(data);
                data = new byte[maxSize];
                prng.GetBytes(data);
            }
            var result = new StringBuilder(maxSize);
            foreach (var b in data)
            {
                result.Append(chars[b % (chars.Length)]);
            }
            return result.ToString();
        }

        //http://stackoverflow.com/a/29970789
        public static bool IsPhoneNumber(string number)
        {
            if (string.IsNullOrEmpty(number)) return false;
            return Regex.Match(number, @"^(\+[0-9]{9})$").Success;
        }
    }
}