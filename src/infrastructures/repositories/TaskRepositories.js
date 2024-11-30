const db = require('src/infrastructures/models/db');
const Tasks = require('src/domain/Tasks');

const TaskRepositories = {
  create: (data) => {
    const { errors } = new Tasks(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.tasks.create(data);
  },
  update: (data) => {
    const { errors } = new Tasks(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.tasks.update(data, { where: { id: data.id }});
  },
  getById: (id) => {
    return db.tasks.findOne({ where: { id : id }});
  }
};


module.exports = TaskRepositories;