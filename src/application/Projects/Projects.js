'use strict';

const ProjectRepo = require('src/infrastructures/repositories/ProjectRepositories');

module.exports = {
  create: (project) => {
    return ProjectRepo.create(project);
  },
  update: (project) => {
    return ProjectRepo.update(project);
  }
};