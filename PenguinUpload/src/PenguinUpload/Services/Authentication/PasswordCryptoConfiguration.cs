namespace PenguinUpload.Services.Authentication
{
    public class PasswordCryptoConfiguration
    {
        public int Iterations { get; set; }
        public int Length { get; set; }
        public int SaltLength { get; set; }

        public static PasswordCryptoConfiguration CreateDefault()
        {
            return new PasswordCryptoConfiguration
            {
                Iterations = 10000,
                Length = Length,
                SaltLength
            };
        }

        public const int DefaultIterationCount = 10000;
        public const int DefaultLength = 128;
        public const int DefaultSaltLength = 64;
    }
}