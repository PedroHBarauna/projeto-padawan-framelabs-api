const AppError = require("../../utils/AppError");

class WorkOrderCreateService {
    constructor(workOrderRepository){
        this.workOrderRepository = workOrderRepository;
    };

    async executar(ordemACriar) {
        const {
            userId,
            nomeCliente,
            emailCliente,
            cpfCliente,
            idTipoOrdem,
            obs
        } = ordemACriar;

        if (!userId) {
            throw new AppError('Usuário inválido.');
        }
        
        if (!nomeCliente || !emailCliente || !cpfCliente){
            throw new AppError('Informe nome, email e CPF do cliente!');
        }

        if (!idTipoOrdem) {
            throw new AppError('Informe o tipo de ordem!');
        }
        const data = new Date(2022, 11, 17);
        const status = 'Em andamento';

        const ordemId = await this.workOrderRepository.cadastrarOrdem({
                userId,
                nomeCliente: nomeCliente.trim(),
                emailCliente: emailCliente.trim().toLowerCase(),
                cpfCliente: cpfCliente.trim(),
                idTipoOrdem: Number(idTipoOrdem),
                data,
                obs: obs ?? null,
                status
        });

        return ordemId;
    }
}

module.exports = WorkOrderCreateService;