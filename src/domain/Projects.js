const { attributes } = require('structure');

const Projects = attributes({
  name: {
    type: String,
    required: true,
  }
})(class Projects{});

module.exports = Projects;