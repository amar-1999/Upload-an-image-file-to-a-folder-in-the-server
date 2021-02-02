# Upload an image file to a folder in the server

Uploading a File means a user from client machine requests to upload a file to the server. For example, users can upload images, videos, etc on Facebook, Instagram, etc.

Files can be uploaded to the server using the Multer module. Multer is a node.js middleware that is used for handling multipart/form-data, which is mostly used library for uploading files.

This example allows for uploading an image file by:

- selecting a file on your machine.
- accepting only png and jpg image files.
- submitting it.
- saving to an `imagesFolder` on your server.
- limits file size to 5.0 MB (can be changed).

### Validations
- 1. Only jpg and png images must be accepted
- 2. Max File Size Allowed is 5 MB

### Technologies
- 1. NodeJS  (Server Side)
- 2. HTML, CSS & JS (Client Side)
## Start

- Install packages by using the command
`npm init -y`

- To install node modules
`npm install`

- Install multer module by using this command.
`npm install multer`

- To include the multer module in the file using these lines.
`var multer = require('multer');`

- To install dependencies ejs and express, use the command
`npm install ejs express`

- Install nodemon using the command
`npm install nodemon --save-dev`

## Run
- run `npm start` in the terminal 

- open http://localhost:3030/ in the browser.
