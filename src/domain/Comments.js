const { attributes } = require('structure');

const Comments = attributes({
  task_id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  attachment_url: {
    type: String,
    empty: true,
  }
})(class Comments{});

module.exports = Comments;