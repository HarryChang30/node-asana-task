require('dotenv').config();

const cloudinary = require('cloudinary').v2;

const UploadCloudinary = {
  uploadFile: async (filePath) => {
    const upload = await cloudinary.uploader.upload(filePath);
    return upload;
  }
};

module.exports = UploadCloudinary;