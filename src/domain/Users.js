const { attributes } = require('structure');

const Users = attributes({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
})(class Users{});

module.exports = Users;