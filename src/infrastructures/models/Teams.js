module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
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