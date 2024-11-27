const db = require('models/db');

const UserRepositories = {
  findById: (id) => {
    return db.users.findById(id);
  }
};

module.exports = UserRepositories;