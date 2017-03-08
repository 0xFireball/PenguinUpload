using Nancy;
using Nancy.ModelBinding;
using PenguinUpload.DataModels.Auth;
using PenguinUpload.Services.Authentication;
using PenguinUpload.Utilities;
using System;
using System.Security;

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
                    if (!PenguinUploadRegistry.Configuration.RegisterEnabled)
                        return Response.AsText("Account registration has been disabled by the administrator.")
                            .WithStatusCode(HttpStatusCode.Unauthorized);

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

                    if (req.Username.Length > 24)
                    {
                        throw new SecurityException("Username may not exceed 24 characters.");
                    }

                    if (req.Password.Length > 128)
                    {
                        throw new SecurityException("Password may not exceed 128 characters.");
                    }

                    // Check invite key if enabled
                    if (PenguinUploadRegistry.Configuration.InviteKey != null)
                    {
                        if (req.InviteKey != PenguinUploadRegistry.Configuration.InviteKey)
                        {
                            throw new SecurityException("The invite key is not recognized.");
                        }
                    }

                    // Validate registration
                    var webUserManager = new WebUserManager();
                    var newUser = await webUserManager.RegisterUserAsync(req);

                    // Return user details
                    return Response.AsJsonNet(new RemoteAuthResponse
                    {
                        User = newUser,
                        ApiKey = newUser.ApiKey
                    });
                }
                catch (NullReferenceException)
                {
                    // A parameter was not provided
                    return HttpStatusCode.BadRequest;
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
                var webUserManager = new WebUserManager();
                var selectedUser = await webUserManager.FindUserByUsernameAsync(req.Username);

                if (selectedUser == null) return HttpStatusCode.Unauthorized;

                try
                {
                    // Validate password
                    if (selectedUser.Enabled && await webUserManager.CheckPasswordAsync(req.Password, selectedUser))
                    {
                        // Return user details
                        return Response.AsJsonNet(new RemoteAuthResponse
                        {
                            User = selectedUser,
                            ApiKey = selectedUser.ApiKey
                        });
                    }
                    return HttpStatusCode.Unauthorized;
                }
                catch (NullReferenceException)
                {
                    // A parameter was not provided
                    return HttpStatusCode.BadRequest;
                }
                catch (SecurityException secEx)
                {
                    // Registration blocked for security reasons
                    return Response.AsText(secEx.Message)
                        .WithStatusCode(HttpStatusCode.Unauthorized);
                }
            });

            Patch("/changepassword", async args =>
            {
                var req = this.Bind<ChangePasswordRequest>();
                var webUserManager = new WebUserManager();
                var selectedUser = await webUserManager.FindUserByUsernameAsync(req.Username);

                try
                {
                    // Validate password
                    if (req.NewPassword.Length < 8)
                    {
                        throw new SecurityException("Password must be at least 8 characters.");
                    }

                    if (req.NewPassword.Length > 128)
                    {
                        throw new SecurityException("Password may not exceed 128 characters.");
                    }

                    if (selectedUser.Enabled && await webUserManager.CheckPasswordAsync(req.OldPassword, selectedUser))
                    {
                        // Update password
                        await webUserManager.ChangeUserPasswordAsync(selectedUser, req.NewPassword);
                        return HttpStatusCode.OK;
                    }
                    return HttpStatusCode.Unauthorized;
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