const { Model, DataTypes } = require("sequelize");

class ServiceOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeCliente: DataTypes.STRING,
        cpfCliente: DataTypes.STRING,
        emailCliente: DataTypes.STRING,
        idServico: DataTypes.INTEGER,
        data: DataTypes.TIME,
        status: DataTypes.STRING,
        obs: DataTypes.STRING,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = ServiceOrder;
