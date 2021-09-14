'use strict';

module.exports = {
  // up = gravacao
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        provider: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        uptadated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    });
  },

  // down = delete
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
