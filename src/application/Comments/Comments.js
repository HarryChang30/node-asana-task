'use strict';

const CommentRepo = require('src/infrastructures/repositories/CommentRepositories');

module.exports = {
  create: (comment) => {
    return CommentRepo.create(comment);
  }
};