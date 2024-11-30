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
  }
};

module.exports = CommentRepositories;