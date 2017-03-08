using System.Security.Claims;
using System.Security.Principal;

namespace PenguinUpload.Services.Authentication
{
    public class ApiClientAuthenticationService
    {
        public static Claim StatelessAuthClaim { get; } = new Claim("authType", "stateless");
        public static string UidKey => "uid";

        public IPenguinUploadContext ServerContext { get; set; }

        public ApiClientAuthenticationService(IPenguinUploadContext serverContext)
        {
            ServerContext = serverContext;
        }

        public ClaimsPrincipal ResolveClientIdentity(string apiKey)
        {
            // Check user records in database
            var webUserManager = new WebUserManager(ServerContext);
            var u = webUserManager.FindUserByApiKey(apiKey);
            if (u == null || !u.Enabled) return null;
            // Give client identity
            var id = new ClaimsPrincipal(new ClaimsIdentity(new GenericIdentity(u.Username, "stateless"),
                new[]
                {
                    StatelessAuthClaim
                }
            ));
            return id;
        }
    }
}