'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      due_date: Sequelize.DATE,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      priority: Sequelize.ENUM({
        values: ['HIGH', 'MEDIUM', 'LOW'],
      }),
      status: Sequelize.ENUM({
        values: ['TO-DO', 'PROGRESS', 'DONE']
      }),
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface) {
    queryInterface.dropTable('tasks');
  }
};
