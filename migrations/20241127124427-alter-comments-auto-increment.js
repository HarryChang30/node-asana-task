'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    // Step 1: Create the sequence
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE comments_id_seq;
    `);
  
    // Step 2: Link the sequence to the 'id' column in the 'projects' table
    await queryInterface.sequelize.query(`
      ALTER TABLE comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq');
    `);
  },

  async down (queryInterface) {
    // Step 1: Remove the default value from the 'id' column
    await queryInterface.sequelize.query(`
      ALTER TABLE comments ALTER COLUMN id DROP DEFAULT;
    `);

    // Step 2: Drop the sequence
    await queryInterface.sequelize.query(`
      DROP SEQUENCE IF EXISTS comments_id_seq CASCADE;
    `);
  }
};
