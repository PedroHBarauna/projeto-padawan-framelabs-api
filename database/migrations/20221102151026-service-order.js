'use strict';
/** @type {import('sequelize-cli').Migration} */
const sequelize = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('ServiceOrder', {      
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
      tipoOrdem: {
        allowNull: false,
        type: sequelize.STRING,
      },
      dataOrdem: {
        allowNull: false,
        type: sequelize.DATE,
      },
      statusOrdem: {
        allowNull: false,
        type: sequelize.STRING,
      },
      observacao: {
        allowNull: true,
        type: sequelize.STRING,
      },
      codigoFuncionario: {
        type: sequelize.INTEGER,
        references: {model: 'Users', key: 'codigo'}
      }});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('ServiceOrder');
  }
};
