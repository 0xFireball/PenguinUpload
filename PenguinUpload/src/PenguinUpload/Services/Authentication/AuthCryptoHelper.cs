using System.Security.Cryptography;
using System.Text;

namespace PenguinUpload.Services.Authentication
{
    public class AuthCryptoHelper
    {
        public PasswordCryptoConfiguration Configuration { get; }

        public AuthCryptoHelper(PasswordCryptoConfiguration conf)
        {
            Configuration = conf;
        }

        public byte[] GenerateSalt()
        {
            var len = Configuration.SaltLength;
            var bytes = new byte[len];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(bytes);
            }
            return bytes;
        }

        private byte[] CalculatePasswordHash(byte[] password, byte[] salt)
        {
            var iter = Configuration.Iterations;
            var len = Configuration.Length;
            using (var deriveBytes = new Rfc2898DeriveBytes(password, salt, iter))
            {
                return deriveBytes.GetBytes(len);
            }
        }

        public byte[] CalculateUserPasswordHash(string password, byte[] salt)
        {
            var passwordBytes = Encoding.UTF8.GetBytes(password);
            return CalculatePasswordHash(passwordBytes, salt);
        }

        public const int DefaultApiKeyLength = 42;
    }
}