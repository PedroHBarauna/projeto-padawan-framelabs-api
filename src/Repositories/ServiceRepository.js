const Service = require('../models/Service');

module.exports = {
  async criarServico({ nome, descricao, preco }) {
    const novoServico = {
      nome,
      descricao,
      preco,
    };

    const servico = Service.create(novoServico);

    return servico;
  },

  async index() {
    const servicos = Service.findAll();

    return servicos;
  },

  async buscarServicoPorId(servicoId) {
    const servico = Service.findOne({
      where: {
        id: servicoId,
      },
    });

    return servico;
  },

  async buscarServicoPorNome(nome) {
    const servico = Service.findOne({
      where: { nome },
    });

    return servico;
  },

  async atualizarInfos({
    id, nome, descricao, preco,
  }) {
    const servicoAtualizado = Service.update(
      {
        nome,
        descricao,
        preco,
      },
      {
        where: {
          id,
        },
      },
    );

    return servicoAtualizado;
  },

  async excluirServico(id) {
    Service.destroy({
      where: {
        id,
      },
    });
  },
};
