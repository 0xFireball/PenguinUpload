using Nancy;
using Nancy.Security;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    public class ApiAccessModule : NancyModule
    {
        public ApiAccessModule() : base("/api")
        {
            this.RequiresAuthentication();
            this.RequiresClaims(x => x.Value == ApiClientAuthenticationService.StatelessAuthClaim.Value);

            Get("/userinfo", async _ =>
            {
                var user = await new WebUserManager().FindUserByUsernameAsync(Context.CurrentUser.Identity.Name);
                return Response.AsJsonNet(user);
            });
        }
    }
}