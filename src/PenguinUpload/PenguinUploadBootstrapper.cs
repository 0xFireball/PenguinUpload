using Nancy;
using Nancy.Authentication.Stateless;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using PenguinUpload.Services.Authentication;

namespace PenguinUpload
{
    public class PenguinUploadBootstrapper : DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            StatelessAuthentication.Enable(pipelines, new StatelessAuthenticationConfiguration(ctx =>
            {
                // Check for the API key
                string accessToken = null;
                if (ctx.Request.Query.apikey.HasValue)
                {
                    accessToken = ctx.Request.Query.apikey;
                }
                else if (ctx.Request.Form["apikey"].HasValue)
                {
                    accessToken = ctx.Request.Form["apikey"];
                }

                // Authenticate the request
                return accessToken == null ? null : ApiClientAuthenticationService.ResolveClientIdentity(accessToken);
            }));
        }
    }
}