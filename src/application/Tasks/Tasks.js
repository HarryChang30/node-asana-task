'use strict';

const TaskRepo = require('src/infrastructures/repositories/TaskRepositories');

module.exports = {
  create: (task) => {
    return TaskRepo.create(task);
  },
  update: (task) => {
    return TaskRepo.update(task);
  },
  getById: (id) => {
    return TaskRepo.getById(id);
  }
};