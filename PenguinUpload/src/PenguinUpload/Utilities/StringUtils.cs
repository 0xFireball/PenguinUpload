using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace PenguinUpload.Utilities
{
    public class StringUtils
    {
        public static string SecureRandomString(int maxSize)
        {
            char[] chars = new char[62];
            chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
            byte[] data = new byte[1];
            using (RandomNumberGenerator prng = RandomNumberGenerator.Create())
            {
                prng.GetBytes(data);
                data = new byte[maxSize];
                prng.GetBytes(data);
            }
            var result = new StringBuilder(maxSize);
            foreach (byte b in data)
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