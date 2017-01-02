using System;
using System.Security;
using Nancy;
using Nancy.ModelBinding;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Utilities;

namespace PenguinUpload.Modules
{
    /// <summary>
    /// Registration functionality
    /// </summary>
    public class RemoteAuthModule : NancyModule
    {
        public RemoteAuthModule()
        {
            Post("/register", async args =>
            {
                var req = this.Bind<RegistrationRequest>();

                try
                {
                    // Validate parameters!

                    // Valdiate username length, charset
                    if (req.Username.Length < 4)
                    {
                        throw new SecurityException("Username must be at least 4 characters.");
                    }
                    // Validate phone number

                    // Validate password
                    if (req.Password.Length < 8)
                    {
                        throw new SecurityException("Password must be at least 8 characters.");
                    }

                    if (req.PhoneNumber != null && !StringUtils.IsPhoneNumber(req.PhoneNumber))
                    {
                        throw new SecurityException("Phone number was of invalid format.");
                    }

                    // Validate registration
                    var newUser = await WebUserManager.RegisterUserAsync(req);

                    // Return user details
                    return Response.AsJsonNet(new RemoteAuthResponse
                    {
                        User = newUser,
                        ApiKey = newUser.ApiKey,
                    });
                }
                catch (NullReferenceException)
                {
                    // A parameter was not provided
                    return new Response().WithStatusCode(HttpStatusCode.BadRequest);
                }
                catch (SecurityException secEx)
                {
                    // Registration blocked for security reasons
                    return Response.AsText(secEx.Message)
                        .WithStatusCode(HttpStatusCode.Unauthorized);
                }
            });

            Post("/login", async args =>
            {
                var req = this.Bind<LoginRequest>();

                var selectedUser = await WebUserManager.FindUserByUsernameAsync(req.Username);

                try
                {
                    // Validate password
                    if (await WebUserManager.CheckPasswordAsync(req.Password, selectedUser))
                    {
                        // Return user details
                        return Response.AsJsonNet(new RemoteAuthResponse
                        {
                            User = selectedUser,
                            ApiKey = selectedUser.ApiKey,
                        });
                    }
                    else
                    {
                        return new Response().WithStatusCode(HttpStatusCode.Unauthorized);
                    }
                }
                catch (NullReferenceException)
                {
                    // A parameter was not provided
                    return new Response().WithStatusCode(HttpStatusCode.BadRequest);
                }
                catch (SecurityException secEx)
                {
                    // Registration blocked for security reasons
                    return Response.AsText(secEx.Message)
                        .WithStatusCode(HttpStatusCode.Unauthorized);
                }
            });
        }
    }
}