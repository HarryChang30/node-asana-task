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
  },
  get_groupTeam_by_user_id: (user_id) => {
    return db.team_groups.findOne({ where: { user_id: user_id }});
  },
  get_projectTeam_by_team_id: (team_id) => {
    return db.team_projects.findOne({ where: { team_id: team_id }});
  }
};

module.exports = TeamRepositories;