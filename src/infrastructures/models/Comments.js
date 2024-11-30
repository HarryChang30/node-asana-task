module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    attachment_url: {
      type: DataTypes.STRING,
    },
  }, {
    underscored: true
  });
};