module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.TIME,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.ENUM({
        values: ['High', 'Medium', 'Low']
      }),
    },
    status: {
      type: DataTypes.ENUM({
        values: ['TO-DO', 'PROGRESS', 'DONE']
      })
    }
  });
};