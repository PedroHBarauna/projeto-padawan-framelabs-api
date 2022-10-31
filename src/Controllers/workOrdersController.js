const AppError = require("../utils/AppError");

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

        const ordemACriar = {
            userId,
            nomeCliente: nomeCliente.trim(),
            emailCliente: emailCliente.trim().tolowercase(),
            cpfCliente: String(cpfCliente).trim(),
            idTipoOrdem: Number(idTipoOrdem),
            data,
            status: 'Em andamento',
            obs
        }

        const idOrdemCriada = await workOrdersRepository.create({ordemACriar});

        if (ordemCriada) {
            return res.json(`Ordem de serviço ${idOrdemCriada} criada!`);
        }

        throw new AppError('Não foi possível completar o cadastro.')
        
        // nomeCliente, email, cpf, tipoOrdem, data, observação, id user, status

    }

    // listar todas

    // mostrar uma

    // editar email do cliente, tipo da ordem, status

    // excluir


}

module.exports = new WorkOrdersController();

// TIPOS de serviço

// id, nome, descrição, preço

// criar, atualizar, deletar
