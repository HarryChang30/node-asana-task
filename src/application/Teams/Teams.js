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
    return TeamsRepo.assign_project(data);
  },
  get_groupTeam_by_user_id: (user_id) => {
    return TeamsRepo.get_groupTeam_by_user_id(user_id);
  },
  get_projectTeam_by_team_id: (team_id) => {
    return TeamsRepo.get_projectTeam_by_team_id(team_id);
  }
};