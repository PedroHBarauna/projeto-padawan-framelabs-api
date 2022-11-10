/* eslint-disable no-param-reassign */
class WorkOrderRepositoryInMemory {
  ordensDeServico = [
    {
      id: 1,
      userId: 2,
      nomeCliente: 'Jãozinho da Silva',
      emailCLiente: 'jao@mail.com',
      cpfCliente: '12345678910',
      idTipoOrdem: 2,
      data: 'Sat Dec 17 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
      obs: '',
      status: 'Em andamento',
    },
    {
      id: 2,
      userId: 2,
      nomeCliente: 'Mary da Silva',
      emailCLiente: 'mary@mail.com',
      cpfCliente: '12345677891',
      idTipoOrdem: 3,
      data: 'Sat Dec 17 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
      obs: '',
      status: 'Em andamento',
    },
  ];

  async cadastrarOrdem({
    userId,
    nomeCliente,
    emailCliente,
    cpfCliente,
    idServico,
    data,
    obs,
    status,
  }) {
    const ordem = {
      id: Math.floor(Math.random() * 1000) + 1,
      userId,
      nomeCliente,
      emailCliente,
      cpfCliente,
      idServico,
      data,
      obs,
      status,
    };

    this.ordensDeServico.push(ordem);

    return ordem;
  }

  async listarOrdens(status) {
    let ordens = this.ordensDeServico;
    if (status) {
      ordens = this.ordensDeServico.find((ordem) => ordem.status === status);
    }

    return ordens;
  }

  async buscarOrdemPorId(ordemId) {
    const ordemDesejada = this.ordensDeServico.find((ordem) => ordem.id === ordemId);

    return ordemDesejada;
  }

  async atualizarInfos({
    ordemId, status, email, idTipoOrdem,
  }) {
    // eslint-disable-next-line array-callback-return, consistent-return
    const ordemAtualizada = this.ordensDeServico.map((ordem) => {
      if (ordem.id === ordemId) {
        ordem.status = status ?? ordem.status;
        ordem.emailCLiente = email ?? ordem.emailCLiente;
        ordem.idTipoOrdem = idTipoOrdem ?? ordem.idTipoOrdem;
        return ordem;
      }
    });

    return ordemAtualizada;
  }

  async excluirOrdem(id) {
    this.ordensDeServico = this.ordensDeServico.filter(
      (ordem) => ordem.id !== id,
    );
  }
}

module.exports = new WorkOrderRepositoryInMemory();
