module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};