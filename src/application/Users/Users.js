'use strict';

const jwt = require('jsonwebtoken');
const UsersRepo = require('src/infrastructures/repositories/UserRepositories');

module.exports = {
  create: (user) => {
    return UsersRepo.create(user);
  },
  login: async (user) => {
    const result = await UsersRepo.login(user);
    const data = {
      id: result.id,
    };
    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(data, secretKey);
    const finalData = {};
    
    finalData.token = token;
    finalData.id = data.id;
    return finalData;
  }
};