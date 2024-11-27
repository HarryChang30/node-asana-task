'use strict';

const UsersRepo = require('src/infrastructures/repositories/UserRepositories');

module.exports = {
  create: (user) => {
    return UsersRepo.create(user);
  }
};