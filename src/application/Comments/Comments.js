'use strict';

const CommentRepo = require('src/infrastructures/repositories/CommentRepositories');

module.exports = {
  create: (comment) => {
    return CommentRepo.create(comment);
  },
  getCommentsByTaskId: (task_id) => {
    return CommentRepo.getCommentsByTaskId(task_id);
  }
};