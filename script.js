const express = require('express');

const ejs = require('ejs');

const fs = require('fs');

const imgfilter = require('./imgfilter');

const multer = require('multer');

const app = express();

//Setup for View Engine 
app.set('view engine' , 'ejs');

//Setup for Storage Engine
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        var folder = "./imagesFolder";
        //imagesFolder is the folder name for uploading images.
        if(!fs.existsSync(folder))
        {
            fs.mkdirSync(folder);
        }
        callback(null,folder);
    },
    filename: function(req, file, callback){
        callback(null, file.originalname);
    }
})

const maxImgsize = 5 * 1000 * 1000;
//Defining the maximum size for image for uploading image 5 M.B.
var imagesFolder = multer({storage:storage, limits: {fileSize: maxImgsize }, fileFilter: imgfilter.imageFilter}).array('files',32);

app.post('/imagesFolder', function(req, res, next) {

    imagesFolder(req, res, function(err){
    
    if (err) {
        // ERROR occured because uploading image of size greater than 5 MB or uploading different file type.
        return res.send("Something went wrong");
    }
    res.send("Uploaded Successfully!");
    // Image(s) successfully uploaded.
    })
})

app.get('/',(req, res) => {
    res.render('index');
}) 

app.listen(3030);