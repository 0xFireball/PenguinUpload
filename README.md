
# PenguinUpload

![screenshot](img/screenshot_upload.png)

Easy file hosting/uploads

## About

PenguinUpload is a self-hostable web application that
lets users upload and share files.

PenguinUpload was inspired by [sr.ht](https://gogs.sr.ht/SirCmpwn/sr.ht).
However, while `sr.ht` uses a Flask backend and static HTML as a frontend,
PenguinUpload uses an ASP.NET Core + NancyFx backend and a Vue.js SPA with
Vue Material as a frontend.

## Features

- Easy configuration (just a JSON file!)
  - Disable public registration
    - Require an invite code to create an account
  - Set physical location of files (use `/tmp` for ephemeral storage)
- Intuitive Material Design interface
  - Pages for login, upload, download, profile, file management, and more

## Install

PenguinUpload uses an embedded NoSQL database ([LiteDB](https://github.com/mbdavid/LiteDB))
to store metadata about files and users. The files themselves are stored in a configurable
location on the filesystem.

### Setup Instructions (From source)

1. Install dependencies (.NET Core SDK 1.1, NPM/Node.js v7)
1. Run the included script `./build.sh`. It will output the application to `./build/`,
  and you can copy it to wherever you like
1. Set up configuration (optional) - Create a file called `penguinupload.config.json`.
 See the example configuration file (`penguinupload.config.example.json` for an example.)
 You can also set ASP.NET Core config in a `hosting.json` file.

## License

Copyright &copy; 0xFireball (Nihal Talur) 2017. All Rights Reserved.

Licensed under the Apache License 2.0
