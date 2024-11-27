module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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
  });
};