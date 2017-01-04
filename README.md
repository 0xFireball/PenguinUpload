
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

## Install

PenguinUpload uses an embedded NoSQL database ([LiteDB](https://github.com/mbdavid/LiteDB))
to store metadata about files and users. The files themselves are stored in a configurable
location on the filesystem.

### Setup Instructions (From source)

1. Install dependencies (.NET Core SDK 1.1)
2. TODO

## License

Copyright &copy; 0xFireball (Nihal Talur) 2017. All Rights Reserved.

Licensed under the Apache License 2.0
