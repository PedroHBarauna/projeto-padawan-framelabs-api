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
        const {usuario} = req.query;

        const listaDeOrdens = await workOrderRepository.listarOrdens(usuario);

        return res.json(listaDeOrdens);
    }


    // mostrar uma

    async show(req, res) {
        const {id} = req.params;

        const ordem = await workOrderRepository.buscarOrdemPorId(id);

        if(ordem) {
            return res.json(ordem);
        }

        throw new AppError('Ordem de serviço não encontrada.')
    }

    // editar email do cliente, tipo da ordem, status
    async update(req, res) {
        const userId = req.user.id;

        const {id} = req.params;

        const {email, idTipoOrdem, status} = req.body;

        const ordem = await workOrderRepository.buscarOrdemPorId(id);

        if (ordem) {
            const usuarioAutorizado = ordem.userId == userId;

            if (usuarioAutorizado) {
                const ordemAtualizada = await workOrderRepository.atualizarInfos({ordemId: id, status, email, idTipoOrdem})
                
                return res.json(ordemAtualizada);
            }

            throw new AppError('Somente o funcionário responsável pode fazer alterações.', 401)
        } 
        
        throw new AppError('Nota não encontrada.')
        
    }


    // excluir
    async delete(req, res) {
        const userId = req.user.id;

        const {id} = req.params;
        const ordem = await workOrderRepository.buscarOrdemPorId(id);

        if (ordem) {
            const usuarioAutorizado = ordem.userId == userId;

            if (usuarioAutorizado) {
                await workOrderRepository.excluirOrdem(id);

                return res.json(`Ordem de serviço ${id} excluída com sucesso.`)
            }

            throw new AppError('Somente o funcionário responsável pode excluir a ordem de serviço.', 401);
        } 
        
        throw new AppError('Ordem de serviço não encontrada.')
    }


}

module.exports = new WorkOrdersController();

// TIPOS de serviço

// id, nome, descrição, preço

// criar, atualizar, deletar
