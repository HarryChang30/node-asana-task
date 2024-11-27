'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.DataTypes.STRING,
      created_at: Sequelize.DataTypes.TIME,
      updated_at: Sequelize.DataTypes.TIME,
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('projects');
  }
};
