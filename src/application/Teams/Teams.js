'use strict';

const TeamsRepo = require('src/infrastructures/repositories/TeamRepositories');

module.exports = {
  create: (data) => {
    return TeamsRepo.create(data);
  },
  assign: (data) => {
    return TeamsRepo.assign(data);
  },
  assign_project: (data) => {
    console.log('data: ', data);
    return TeamsRepo.assign_project(data);
  }
};