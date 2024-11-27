module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};