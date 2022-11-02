'use strict';
/** @type {import('sequelize-cli').Migration} */
const sequelize = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('ServiceOrder', {   
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },   
      nomeCliente: {
        allowNull: false,
        type: sequelize.STRING,
      },
      cpfCliente: {
        allowNull: false,
        type: sequelize.STRING,
        unique:true
      },
      emailCliente: {
        allowNull: true,
        type: sequelize.STRING,
      },
      idTipoOrdem: {
        allowNull: false,
        type: sequelize.STRING,
      },
      data: {
        allowNull: false,
        type: sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: sequelize.STRING,
      },
      obs: {
        allowNull: true,
        type: sequelize.STRING,
      },
      userId: {
        type: sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      }});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('ServiceOrder');
  }
};
