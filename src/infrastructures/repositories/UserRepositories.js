const db = require('src/infrastructures/models/db');
const Users = require('src/domain/Users');
const { v4: uuidv4 } = require('uuid');

const UserRepositories = {
  findById: (id) => {
    return db.users.findById(id);
  },
  create: (data) => {
    const { errors } = new Users(data).validate();

    if (errors) {
      throw new Error('ValidationError');
    }

    data.id = uuidv4();
    return db.users.create(data);
  }
};

module.exports = UserRepositories;