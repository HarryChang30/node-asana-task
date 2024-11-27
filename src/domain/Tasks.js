const { attributes } = require('structure');

const Tasks = attributes({
  project_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    equal: ['High', 'Medium', 'Low'],
  },
  status: {
    type: String,
    equal: ['TO-DO', 'PROGRESS', 'DONE'],
  }
})(class Tasks{});

module.exports = Tasks;