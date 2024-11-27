const { attributes } = require('structure');

const TeamProjects = attributes({
  team_id: {
    type: Number,
    required: true,
  },
  project_id: {
    type: Number,
    required: true,
  }
})(class TeamProjects{});

module.exports = TeamProjects;