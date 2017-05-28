using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Nancy;
using Nancy.Owin;
using PenguinUpload.Configuration;
using System.IO;
using System;
using Newtonsoft.Json;

namespace PenguinUpload
{
    public class Startup
    {
        private static string ClientAppPath = "ClientApp/";

        private static string ConfigurationFile = "penguinupload.config.json";

        public Startup(IHostingEnvironment env)
        {
            var appConfigBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            ApplicationConfiguration = appConfigBuilder.Build();

            ConfigurationFile = Path.Combine(Directory.GetCurrentDirectory(), ConfigurationFile);
            // Generate the config file if it doesn't exist
            if (!File.Exists(ConfigurationFile))
            {
                try
                {
                    File.WriteAllText(ConfigurationFile, 
                        JsonConvert.SerializeObject(new PenguinUploadConfiguration()));
                }
                catch
                {
                    Console.WriteLine($"Failed to create default configuration in {ConfigurationFile}");
                }
            }

            var penguinUploadConfigBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile(ConfigurationFile, optional: false, reloadOnChange: true);
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
            // loggerFactory.AddDebug();

            // Create default configuration
            var puConfig = new PenguinUploadConfiguration();

            // Bind configuration
            PUConfiguration.Bind(puConfig);

            var context = new PenguinUploadContext(puConfig);

            ClientAppPath = Path.Combine(Directory.GetCurrentDirectory(), ClientAppPath);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ProjectPath = ClientAppPath,
                    ConfigFile = $"{ClientAppPath}webpack.config.js"
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // add wwwroot/
            app.UseStaticFiles();

            // set up Nancy OWIN hosting
            app.UseOwin(x => x.UseNancy(options =>
            {
                options.PassThroughWhenStatusCodesAre(
                    HttpStatusCode.NotFound,
                    HttpStatusCode.InternalServerError
                );
                options.Bootstrapper = new PenguinUploadBootstrapper(context);
            }));

            // set up MVC fallback
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}