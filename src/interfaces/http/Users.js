'use strict';

const Users = require('src/application/Users/Users');

module.exports = {
  create: async (req, res) => {
    const data = req.body;
    const result = await Users.create(data);
    const users = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'create user failed'}});
    }

    // TO-DO need to be refactored 
    // Utilize build the function for deserialize the data
    users.id = result.id;
    users.username = result.username;
    users.name = result.name;
    users.created_at = result.createdAt;
    
    return res.status(200).json({ result: users });
  },
  login: async (req, res) => {
    const data = req.body;
    const result = await Users.login(data);
    const login = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'login failed' }});
    }

    login.id = result.id;
    login.token = result.token;
    return res.status(200).json({ result: login });
  }
};