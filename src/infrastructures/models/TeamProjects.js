module.exports = (sequelize, DataTypes) => {
  return sequelize.define('team_projects', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
    },
    project_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
  });
};