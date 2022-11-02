'use strict';
/** @type {import('sequelize-cli').Migration} */
const sequelize = require('sequelize')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
      email: {
        allowNull: false,
        type: sequelize.STRING,
        unique: true,
      },
      senhaDoFuncionario: {
        allowNull: false,
        type: sequelize.STRING,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};