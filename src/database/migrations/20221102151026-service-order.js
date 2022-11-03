'use strict';
/** @type {import('sequelize-cli').Migration} */
const Sequelize = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('ServiceOrder', {   
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },   
      nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpfCliente: {
        allowNull: false,
        type: Sequelize.STRING,
        unique:true
      },
      emailCliente: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      idTipoOrdem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      obs: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
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
     await queryInterface.dropTable('ServiceOrder');
  }
};
