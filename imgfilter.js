const imageFilter = function(req, file, callback) {
    // Accept jpg and png images only
    if (!file.originalname.match(/\.(jpg|png)$/)) {
        req.fileValidationError = 'Only png and ipg image files are allowed!';
        return callback(new Error('Only png and jpg image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFilter = imageFilter;