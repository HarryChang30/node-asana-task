'use strict';

const Comment = require('src/application/Comments/Comments');
const Task = require('src/application/Tasks/Tasks');

module.exports = {
  create: async(req, res) => {
    const data = req.body;
    const result = await Comment.create(data);
    const comment = {};

    const task = await Task.getById(data.task_id);
    if (task.project_id != req.project_id) {
      return res.status(403).json({ result: { message: 'not having access on this project'}});
    }

    if (!result) {
      return res.status(500).json({ result: { message: 'create comment failed' }});
    }

    comment.id = result.id;
    comment.description = result.description;
    comment.attachment_url = result.attachment_url;
    comment.created_at = result.created_at;
    comment.updated_at = result.updated_at;

    return res.status(200).json({ result: comment });
  },
  getCommentsByTaskId: async(req, res) => {
    const task_id = req.params.task_id;
    const result = await Comment.getCommentsByTaskId(task_id);
    const comments = [];

    const task = await Task.getById(task_id);
    if (task.project_id != req.project_id) {
      return res.status(403).json({ result: { message: 'not having access on this project'}});
    }

    if (!result) {
      return res.status(500).json({ result: { message: 'get comment by id failed' }});
    }

    for (let i = 0; i < result.length; i++) {
      const comment = {};
      const item = result[i].dataValues;
      comment.id = item.id;
      comment.task_id = item.task_id;
      comment.description = item.description;
      comment.attachment_url = item.attachment_url;
      comment.created_at = item.createdAt;
      comment.updated_at = item.updatedAt;

      comments.push(comment);
    }

    return res.status(200).json({ result: { comments: comments }});
  }
};