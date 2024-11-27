'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
    });
  },

  async down (queryInterface) {
    queryInterface.dropTable('teams');
  }
};
