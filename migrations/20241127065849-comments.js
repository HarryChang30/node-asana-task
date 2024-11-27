'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tasks',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      description: Sequelize.STRING,
      attachment_url: Sequelize.STRING,
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
    });
  },

  async down (queryInterface) {
    queryInterface.dropTable('comments');
  }
};
