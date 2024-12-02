'use strict';

const CommentRepo = require('src/infrastructures/repositories/CommentRepositories');

module.exports = {
  create: (comment) => {
    return CommentRepo.create(comment);
  },
  getCommentsByTaskId: async (task_id) => {
    try {
      const data = await CommentRepo.getCommentsByTaskId(task_id);
      return data;
    } catch (error) {
      throw new Error('SequelizeDatabaseError');
    }
  }
};