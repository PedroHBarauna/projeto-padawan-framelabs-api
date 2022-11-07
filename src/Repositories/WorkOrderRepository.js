const WorkOrder = require('../models/WorkOrder')

module.exports = {

    async cadastrarOrdem({
        userId,
        nomeCliente,
        emailCliente,
        cpfCliente,
        idServico,
        data,
        obs,
        status,
    }){
        const ordem = {
            userId,
            nomeCliente,
            emailCliente,
            cpfCliente,
            idServico,
            data,
            obs,
            status,
        };

        const workOrder = WorkOrder.create(ordem)

        return workOrder;
    },

    async listarOrdens(status) {
        let ordens = [];
        
        if (status) {
            ordens = WorkOrder.findAll({
                where: {
                    status
                }
            });
        } else {
            ordens = WorkOrder.findAll();
        }
        

        return ordens;
    },

    async buscarOrdemPorId(ordemId) {
        const workOrder = WorkOrder.findOne({
            where: {
                id: ordemId
            }
        });

        return workOrder;
    },

    async atualizarInfos({ordemId, status, email, idTipoOrdem}) { 
        
        const ordemAtualizada = WorkOrder.update({
            status: status,
            email: email,
            idServico: idTipoOrdem
        },
        {
            where:{
                id: ordemId
            }
        })

        return ordemAtualizada;
        
    },

    async excluirOrdem(id) {
        const ordemExcluida = WorkOrder.destroy({
            where:{
                id: id
            }
        })
        
        return;
    }
}