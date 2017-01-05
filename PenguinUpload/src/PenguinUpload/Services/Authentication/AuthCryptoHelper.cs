using System.Security.Cryptography;
using System.Text;

namespace PenguinUpload.Services.Authentication
{
    public class AuthCryptoHelper
    {
        public static byte[] GetRandomSalt(int length)
        {
            var bytes = new byte[length];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(bytes);
            }
            return bytes;
        }

        private static byte[] CalculatePasswordHash(byte[] password, byte[] salt, int iterations, int length)
        {
            using (var deriveBytes = new Rfc2898DeriveBytes(password, salt, iterations))
            {
                return deriveBytes.GetBytes(length);
            }
        }

        public static byte[] CalculateUserPasswordHash(string password, byte[] salt, PasswordCryptoConfiguration cryptoConf)
        {
            var passwordBytes = Encoding.UTF8.GetBytes(password);
            return CalculatePasswordHash(passwordBytes, salt, cryptoConf.Iterations, cryptoConf.Length);
        }

        public const int DefaultSaltLength = 64;
        public const int DefaultApiKeyLength = 24;
    }
}
