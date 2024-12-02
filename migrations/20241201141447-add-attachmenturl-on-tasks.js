'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tasks', 'attachment_url', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('tasks', 'attachment_url');
  }
};
