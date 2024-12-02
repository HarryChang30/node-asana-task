'use strict';

const Uploads = require('src/application/Uploads/Uploads');

module.exports = {
  upload: async(req, res) => {
    const storePath = req.store_path;
    const result = await Uploads.uploadFile(storePath);

    if (!result) {
      return res.status(500).json({
        result: {
          message: 'failed upload file'
        }
      });
    }

    console.log('Result: ', result);

    return res.status(200).json({ result: {
      message: 'success upload',
      attachment_url: result.secure_url,
    }});
  }
};