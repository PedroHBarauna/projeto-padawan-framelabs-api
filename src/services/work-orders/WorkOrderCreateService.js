const AppError = require('../../utils/AppError');

class WorkOrderCreateService {
  constructor(workOrderRepository) {
    this.workOrderRepository = workOrderRepository;
  }

  async executar(ordemACriar) {
    const {
      userId,
      nomeCliente,
      emailCliente,
      cpfCliente,
      data,
      idServico,
      obs,
    } = ordemACriar;

    if (!userId) {
      throw new AppError('Usuário inválido.');
    }

    if (!nomeCliente || !emailCliente || !cpfCliente) {
      throw new AppError('Informe nome, email e CPF do cliente!');
    } // CPF único?

    if (!idServico) {
      throw new AppError('Informe o tipo de ordem!');
    }

    const status = 'Em andamento';

    const ordem = await this.workOrderRepository.cadastrarOrdem({
      userId,
      nomeCliente: nomeCliente.trim(),
      emailCliente: emailCliente.trim().toLowerCase(),
      cpfCliente: cpfCliente.trim(),
      idServico: Number(idServico),
      data,
      obs: obs ?? null,
      status,
    });

    return ordem.id;
  }
}

module.exports = WorkOrderCreateService;
