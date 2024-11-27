module.exports = (sequelize, DataTypes) => {
  return sequelize.define('team_groups', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
  });
};