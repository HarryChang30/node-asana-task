module.exports = (sequelize, DataTypes) => {
  return sequelize.define('projects', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    }
  });
};
