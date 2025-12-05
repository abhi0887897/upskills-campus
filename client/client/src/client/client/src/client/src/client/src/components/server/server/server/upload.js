const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require("dotenv").config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => ({
    bucketName: "uploads",
    filename: `${Date.now()}_${file.originalname}`
  })
});

module.exports = multer({ storage });
