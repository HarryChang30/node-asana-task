module.exports = (sequelize, DataTypes) => {
  return sequelize.define('team_groups', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  });
};