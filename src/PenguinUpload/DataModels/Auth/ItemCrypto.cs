using PenguinUpload.Services.Authentication;

namespace PenguinUpload.DataModels.Auth
{
    public class ItemCrypto
    {
        public PasswordCryptoConfiguration Conf { get; set; }
        public byte[] Salt { get; set; }
        public byte[] Key { get; set; }
    }
}