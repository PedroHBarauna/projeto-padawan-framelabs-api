class ServiceRepositoryInMemory {
  servicos = [
    {
      id: 1,
      nome: 'Limpeza',
      descricao:
        'Limpeza completa do interior do carro, lavagem do motor, lavagem externa e polimento.',
      preco: 120,
    },
    {
      id: 2,
      nome: 'Revisão preventiva',
      descricao: `Revisão preventiva geral, incluindo troca de filtros de combustível, óleo lubrificante, ar. 
            Troca de óleo lubrificante. 
            Troca do líquido de arrefecimento. 
            Ajuste de folga de válvulas. 
            Limpeza de bicos injetores.`,
      preco: 700,
    },
    {
      id: 3,
      nome: 'Balanceamento e alinhamento',
      descricao: 'Balanceamento e alinhamento entre rodas e pneus.',
      preco: 200,
    },
    {
      id: 4,
      nome: 'Troca de óleo e filtros',
      descricao:
        'Troca de filtros de óleo lubrificante, combustível e de ar. Troca do óleo lubrificante do cárter.',
      preco: 150,
    },
  ];

  async create({ nome, descricao, preco }) {
    const servico = {
      id: Math.floor(Math.random() * 1000) + 1,
      nome,
      descricao,
      preco,
    };

    this.servicos.push(servico);

    return servico.id;
  }

  async index() {
    return this.servicos;
  }

  async buscarServicoPorId(servicoId) {
    const servicoEncontrado = this.servicos.find((servico) => servico.id === servicoId);

    return servicoEncontrado;
  }

  async atualizarInfos({
    id, nome, descricao, preco,
  }) {
    // eslint-disable-next-line array-callback-return, consistent-return
    const servicoAtualizado = this.servicos.map((servico) => {
      if (servico.id === id) {
        servico.nome = nome ?? servico.nome;
        servico.descricao = descricao ?? servico.descricao;
        servico.preco = preco ?? servico.preco;
        return servico;
      }
    });

    return servicoAtualizado;
  }

  async excluirServico(id) {
    this.servicos = this.servicos.filter((servico) => servico.id !== id);
  }
}

module.exports = new ServiceRepositoryInMemory();
