'use strict';

const Comment = require('src/application/Comments/Comments');

module.exports = {
  create: async(req, res) => {
    const data = req.body;
    const result = await Comment.create(data);
    const comment = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'create comment failed' }});
    }

    comment.id = result.id;
    comment.description = result.description;
    comment.attachment_url = result.attachment_url;
    comment.created_at = result.created_at;
    comment.updated_at = result.updated_at;

    return res.status(200).json({ result: comment });
  }
};