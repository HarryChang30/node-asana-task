'use strict';

const ProjectRepo = require('src/infrastructures/repositories/ProjectRepositories');

module.exports = {
  get: (id) => {
    return ProjectRepo.get(id);
  },
  create: (project) => {
    return ProjectRepo.create(project);
  },
  update: (project) => {
    return ProjectRepo.update(project);
  },
  delete: (id) => {
    return ProjectRepo.delete(id);
  }
};