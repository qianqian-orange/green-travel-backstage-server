const multer = require('multer');
const { uploadFilename, uploadDirname } = require('../utils/upload');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirname(file.fieldname));
  },
  filename: function (req, file, cb) {
    cb(null, uploadFilename(file.mimetype));
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
});

module.exports = upload;