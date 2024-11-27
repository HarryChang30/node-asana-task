const db = require('src/infrastructures/models/db');
const Teams = require('src/domain/Teams');
const TeamGroups = require('src/domain/TeamGroups');
const TeamProjects = require('src/domain/TeamProjects');

const TeamRepositories = {
  create: (data) => {
    const { errors } = new Teams(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.teams.create(data);
  },
  assign: (data) => {
    const { errors } = new TeamGroups(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.team_groups.create(data);
  },
  assign_project: (data) => {
    const { errors } = new TeamProjects(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.team_projects.create(data);
  }
};

module.exports = TeamRepositories;