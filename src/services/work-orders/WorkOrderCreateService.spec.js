/* eslint-disable no-undef */
const workOrderRepository = require('../../Repositories/WorkOrderRepositoryInMemory');
const WorkOrderCreateService = require('./WorkOrderCreateService');

describe('WorkOrderCreateService', () => {
  let workOrderCreateService = null;

  beforeEach(() => {
    workOrderCreateService = new WorkOrderCreateService(workOrderRepository);
  });

  it('Devo criar uma ordem de serviço', async () => {
    const ordem = {
      userId: 2,
      nomeCliente: 'John da Silva',
      emailCliente: 'john@mail.com',
      cpfCliente: '12345678912',
      idServico: 2,
      data: 'Sat Dec 17 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
      obs: '',
      status: 'Em andamento',
    };

    const ordemId = await workOrderCreateService.executar(ordem);

    expect(ordemId).toEqual(expect.any(Number));
  });
});
