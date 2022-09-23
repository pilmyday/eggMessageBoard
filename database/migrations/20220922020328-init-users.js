'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      user_id: { 
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: STRING(30),
      comment: STRING(60),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};