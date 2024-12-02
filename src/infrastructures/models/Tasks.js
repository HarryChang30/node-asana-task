module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
        values: ['HIGH', 'MEDIUM', 'LOW']
      }),
    },
    status: {
      type: DataTypes.ENUM({
        values: ['TO-DO', 'PROGRESS', 'DONE']
      })
    }
  }, {
    underscored: true,
  });
};