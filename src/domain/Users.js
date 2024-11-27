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
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  }
})(class Users{});

module.exports = Users;