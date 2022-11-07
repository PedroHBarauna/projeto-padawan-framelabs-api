const {Model, DataTypes} = require('sequelize');

class Service extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            preco: DataTypes.FLOAT,
        },{
            sequelize
        })
    };

    static associate(models) {
        this.hasMany(models.WorkOrder, {foreignKey: 'idServico', as: 'ordens'});
    };
}

module.exports = Service;