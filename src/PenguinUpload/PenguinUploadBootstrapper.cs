using Nancy;
using Nancy.Authentication.Stateless;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using PenguinUpload.Services.Authentication;

namespace PenguinUpload
{
    public class PenguinUploadBootstrapper : DefaultNancyBootstrapper
    {
        public IPenguinUploadContext ServerContext { get; set; }

        public PenguinUploadBootstrapper(IPenguinUploadContext serverContext)
        {
            ServerContext = serverContext;
        }

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
                else
                {
                    var authHeader = ctx.Request.Headers.Authorization;
                    if (!string.IsNullOrWhiteSpace(authHeader))
                    {
                        accessToken = authHeader;
                    }
                }

                // Authenticate the request
                var authService = new ApiClientAuthenticationService(ServerContext);
                return accessToken == null ? null : authService.ResolveClientIdentity(accessToken);
            }));
        }

        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);

            container.Register<IPenguinUploadContext>(ServerContext);
        }
    }
}