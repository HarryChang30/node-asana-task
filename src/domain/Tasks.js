const { attributes } = require('structure');

const Tasks = attributes({
  project_id: {
    type: Number,
  },
  user_id: {
    type: String,
  },
  due_date: {
    type: Date,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    equal: ['HIGH', 'MEDIUM', 'LOW'],
  },
  status: {
    type: String,
    equal: ['TO-DO', 'PROGRESS', 'DONE'],
  }
})(class Tasks{});

module.exports = Tasks;