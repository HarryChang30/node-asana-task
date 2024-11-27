const { attributes } = require('structure');

const TeamGroups = attributes({
  team_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  }
})(class TeamGroups{});

module.exports = TeamGroups;