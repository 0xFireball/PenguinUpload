using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace PenguinUpload
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Load PenguinUpload Config
            if (File.Exists(PenguinUploadRegistry.ConfigFileName))
            {
                var configFileContents = File.ReadAllText(PenguinUploadRegistry.ConfigFileName);
                JsonConvert.PopulateObject(configFileContents, PenguinUploadRegistry.Configuration);
            }

            // Load ASP.NET Core web app
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddEnvironmentVariables(prefix: "ASPNETCORE_")
                .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}