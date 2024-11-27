const { attributes } = require('structure');

const Teams = attributes({
  name: {
    type: String,
    required: true,
  }
})(class Teams{});

module.exports = Teams;