# Image-uploader

Uploading a File means a user from client machine requests to upload file to the server. For example, users can upload images, videos, etc on Facebook, Instagram, etc.

Files can be uploaded to the server using Multer module. Multer is a node.js middleware which is used for handling multipart/form-data, which is mostly used library for uploading files.

This example allows for uploading a image file by:

selecting a file on your machine.
accepting only png and jpg image files.
submitting it .
saving to an imagesFolder on your server.
limits file size to 5.0 MB (can be changed).

## Start

Install packages by using command
npm init -y
and npm install to install node modules

Install multer module by using this command.
npm install multer

To include the multer module in the file use this lines.
var multer = require('multer');

To install dependencies ejs and express, use the command
npm install ejs express

Install nodemon using command
npm install nodemon -g

run npm start in the terminal  and 
open http://localhost:3030/ in the browser.
