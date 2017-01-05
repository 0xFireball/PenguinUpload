
# PenguinUpload - Administration

If you are hosting a PenguinUpload instance, it is a good idea
to know how to perform basic administration tasks.

Since PenguinUpload is a file hosting service, running an instance
with public registration will almost certainly result in spam
and other unwanted activity.

The Admin features of PenguinUpload are accessed entirely through the
REST API, and there are only a few admin-specific routes. Once you (the administrator)
have selected target users, you can access the user-specific API by
impersonating the users by using their API keys.

## Becoming an admin

Add your username to the `admins` array in the configuration file.

## Admin REST API

All API requests must be authenticated with a `apikey` parameter that
contains the API key of a user with admin privileges.

### User management

`/api/admin/enumerateusers` - Return a JSON array containing the user
details of all registered users.

Use this to get a list of all users and their information.
**The password is securely hashed and encrypted, and cannot be retrieved!**

`/api/admin/accountinfo/{name}` - Get account info for a single user (username is `name`).

`/api/admin/disableuser/{name}` - Disable a user (username is `name`). This
will disable all API/application access for the user. It is highly recommended
that you disable a user using this route before making changes to the user or
his or her data.

`/api/admin/enableuser/{name}` - Enables a user. Opposite of the previously
mentioned `disableuser`.

### Files

`/api/admin/fileinfo/{id}` - Get file info by ID.

`/api/admin/deletefile/{id}` - Deletes a file by ID.