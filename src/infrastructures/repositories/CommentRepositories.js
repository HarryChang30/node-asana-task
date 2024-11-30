const db = require('src/infrastructures/models/db');
const Comments = require('src/domain/Comments');

const CommentRepositories = {
  create: (data) => {
    console.log(data);
    const { errors } = new Comments(data).validate();
    
    if (errors) {
      console.log(errors);
      throw new Error('ValidationError');
    }

    return db.comments.create(data);
  },
  getCommentsByTaskId: (task_id) => {
    return db.comments.findAll({ where: { task_id: task_id }});
  }
};

module.exports = CommentRepositories;