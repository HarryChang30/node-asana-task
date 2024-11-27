'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      username: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      name: Sequelize.DataTypes.STRING,
      created_at: Sequelize.DataTypes.TIME,
      updated_at: Sequelize.DataTypes.TIME,
    });
  },

  async down (queryInterface) {
    queryInterface.dropTable('users');
  }
};
