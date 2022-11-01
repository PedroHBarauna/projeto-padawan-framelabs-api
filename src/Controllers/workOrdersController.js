const AppError = require("../utils/AppError");

const workOrderRepository = require('../Repositories/WorkOrderRepositoryInMemory');
const WorkOrderCreateService = require('../services/work-orders/WorkOrderCreateService');
const workOrderCreateService = new WorkOrderCreateService(workOrderRepository);

class WorkOrdersController {
    async create(req, res) {
        const userId = req.user.id;

        const { 
            nomeCliente, 
            emailCliente, 
            cpfCliente, 
            idTipoOrdem, 
            data, 
            obs 
        } = req.body;

        const idOrdemCriada = await workOrderCreateService.executar({userId, nomeCliente, 
            emailCliente, 
            cpfCliente, 
            idTipoOrdem, 
            data, 
            obs });

        if (idOrdemCriada) {
            return res.json(`Ordem de serviço ${idOrdemCriada} criada!`);
        }

        throw new AppError('Não foi possível completar o cadastro.')
    

    }

    // listar todas
    async index(req, res) {
        const {usuario} = req.query ?? '';

        const listaDeOrdens = await workOrderRepository.listarOrdens(usuario);

        return res.json(listaDeOrdens);
    }


    // mostrar uma

    // editar email do cliente, tipo da ordem, status

    // excluir


}

module.exports = new WorkOrdersController();

// TIPOS de serviço

// id, nome, descrição, preço

// criar, atualizar, deletar
