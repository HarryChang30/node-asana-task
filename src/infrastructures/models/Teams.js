module.exports = (sequelize, DataTypes) => {
  return sequelize.define('teams', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
  });
};