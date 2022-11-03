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
    }
}

module.exports = Service;