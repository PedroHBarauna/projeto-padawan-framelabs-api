'use strict';
/** @type {import('sequelize-cli').Migration} */
const sequelize = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      codigo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: sequelize.STRING,
      },
      preco: {
        allowNull: false,
        type: sequelize.REAL,
        unique: true,
      },
      descricao: {
        allowNull: false,
        type: sequelize.STRING,
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};
