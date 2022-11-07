const {Model, DataTypes} = require('sequelize');

class ServiceOrder extends Model {
    static init(sequelize){
        super.init({
            nomeCliente: DataTypes.STRING,
            cpfCliente: DataTypes.STRING,
            emailCliente: DataTypes.STRING,
            data: DataTypes.TIME,
            status: DataTypes.STRING,
            obs: DataTypes.STRING
        },{
            sequelize
        })
    };

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'userId', as: 'funcionario'});
        this.belongsTo(models.Service, {foreignKey: 'idServico', as: 'servico'});
    };

}

module.exports = ServiceOrder;