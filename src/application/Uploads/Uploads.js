'use strict';

const fs = require('fs');
const Upload = require('src/infrastructures/cloudinary/UploadCloudinary');

module.exports = {
  uploadFile: async (filePath) => {
    const result = await Upload.uploadFile(filePath);

    // remove the file after success upload
    // to cloudinary storage
    await fs.unlinkSync(filePath);

    return result;
  }
};