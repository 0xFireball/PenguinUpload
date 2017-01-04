namespace PenguinUpload.Services.Authentication
{
    public class PasswordCryptoConfiguration
    {
        public int Iterations { get; set; }
        public int Length { get; set; }

        public static PasswordCryptoConfiguration CreateDefault()
        {
            return new PasswordCryptoConfiguration
            {
                Iterations = 10000,
                Length = 128
            };
        }
    }
}