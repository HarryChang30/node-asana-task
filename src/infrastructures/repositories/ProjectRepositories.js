const db = require('src/infrastructures/models/db');
const Projects = require('src/domain/Projects');

const ProjectRepositories = {
  create: (data) => {
    const { errors } = new Projects(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.projects.create(data);
  },
  update: (data) => {
    const { errors } = new Projects(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    return db.projects.update(data, { where: { id: data.id }});
  }
};

module.exports = ProjectRepositories;