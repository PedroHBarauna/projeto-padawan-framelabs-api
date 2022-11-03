const {Model} = require('sequelize');
const {DataTypes} = require('sequelize');

class ServiceOrder extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nomeCliente: {
                allowNull: false,
                type: DataTypes.STRING,
              },
              cpfCliente: {
                allowNull: false,
                type: DataTypes.STRING,
                unique:true
              },
              emailCliente: {
                allowNull: true,
                type: DataTypes.STRING,
              },
              idTipoOrdem: {
                allowNull: false,
                type: DataTypes.STRING,
              },
              data: {
                allowNull: false,
                type: DataTypes.DATE,
              },
              status: {
                allowNull: false,
                type: DataTypes.STRING,
              },
              obs: {
                allowNull: true,
                type: DataTypes.STRING,
              },
              userId: {
                type: DataTypes.INTEGER,
                references: {model: 'Users', key: 'id'}
              }
        },{
            sequelize
        })
    }
}

module.exports = User;