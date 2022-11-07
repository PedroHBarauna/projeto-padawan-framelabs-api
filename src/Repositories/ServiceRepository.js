const Service = require("../models/Service");

module.exports = {
  async criarServico({ nome, descricao, preco }) {
    const novoServico = {
      nome,
      descricao,
      preco,
    };

    const service = Service.create(novoServico);

    return service.dataValues;
  },

  async index() {
    const service = Service.findAll();

    return service;
  },

  async buscarServicoPorId(servicoId) {
    const service = Service.findOne({
      where: {
        id: servicoId,
      },
    });

    return service;
  },

  async atualizarInfos({ id, nome, descricao, preco }) {
    const servicoAtualizado = Service.update(
      {
        nome: nome,
        descricao: descricao,
        preco: preco,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return servicoAtualizado;
  },

  async excluirServico(id) {
    const servicoExcluido = Service.destroy({
      where: {
        id: id,
      },
    });
    return;
  },
};
