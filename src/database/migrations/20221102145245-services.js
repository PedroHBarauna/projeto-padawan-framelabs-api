'use strict';
/** @type {import('sequelize-cli').Migration} */
const Sequelize = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      preco: {
        allowNull: false,
        type: Sequelize.REAL,
        unique: true,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};
