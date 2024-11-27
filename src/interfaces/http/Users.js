'use strict';

const CreateUsers = require('src/application/Users/CreateUsers');

module.exports = {
  create: async (req, res) => {
    const data = req.body;
    const result = await CreateUsers.create(data);
    const users = {};

    // TO-DO need to be refactored 
    // Utilize build the function for deserialize the data
    users.id = result.id;
    users.username = result.username;
    users.name = result.name;
    users.created_at = result.createdAt;
    
    return res.status(200).json({ result: users });
  }
};