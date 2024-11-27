module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};