using System.Security.Claims;
using System.Security.Principal;

namespace PenguinUpload.Services.Authentication
{
    public class ApiClientAuthenticationService
    {
        public static Claim StatelessAuthClaim { get; } = new Claim("authType", "stateless");
        public static string UidKey => "uid";

        public static ClaimsPrincipal ResolveClientIdentity(string apiKey)
        {
            // Check user records in database
            var u = WebUserManager.FindUserByApiKeyAsync(apiKey);
            if (u != null)
            {
                // Give client identity
                var id = new ClaimsPrincipal(new ClaimsIdentity(new GenericIdentity(u.Username, "stateless"),
                    new Claim[] {
                        StatelessAuthClaim,
                    }
                ));
                return id;
            }
            return null;
        }
    }
}