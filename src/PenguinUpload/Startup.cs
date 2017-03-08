using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Nancy;
using Nancy.Owin;
using PenguinUpload.Configuration;

namespace PenguinUpload
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var appConfigBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            ApplicationConfiguration = appConfigBuilder.Build();
            var penguinUploadConfigBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("penguinupload.config.json", optional: false, reloadOnChange: true);
            PUConfiguration = penguinUploadConfigBuilder.Build();
        }

        public IConfigurationRoot ApplicationConfiguration { get; }
        public IConfigurationRoot PUConfiguration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(ApplicationConfiguration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Create default configuration
            var puConfig = new PenguinUploadConfiguration();

            // Bind configuration
            PUConfiguration.Bind(puConfig);
            

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseOwin(x => x.UseNancy(options => options.PassThroughWhenStatusCodesAre(
                HttpStatusCode.NotFound,
                HttpStatusCode.InternalServerError
            )));

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}