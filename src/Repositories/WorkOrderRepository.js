const WorkOrder = require('../models/WorkOrder')

module.exports = {

    async cadastrarOrdem({
        userId,
        nomeCliente,
        emailCliente,
        cpfCliente,
        idTipoOrdem,
        data,
        obs,
        status,
    }){
        const ordem = {
            userId,
            nomeCliente,
            emailCliente,
            cpfCliente,
            idTipoOrdem,
            data,
            obs,
            status,
        };

        const workOrder = WorkOrder.create(ordem)

        return workOrder.dataValues;
    },

    async listarOrdens(status) {
        
        const workOrder = WorkOrder.findAll({
            where: {
                status: status
            }
        })

        return workOrder;
    },

    async buscarOrdemPorId(ordemId) {
        const workOrder = WorkOrder.findOne({
            where: {
                id: ordemId
            }
        })
    },

    async atualizarInfos({ordemId, status, email, idTipoOrdem}) { 
        const ordemAtualizada = this.ordensDeServico.map(ordem =>  {
            if(ordem.id == ordemId) {
                ordem.status = status ?? ordem.status; 
                ordem.emailCLiente = email ?? ordem.emailCLiente; 
                ordem.idTipoOrdem = idTipoOrdem ?? ordem.idTipoOrdem;                
                return ordem;
            }
        });

        return ordemAtualizada;
        
    },

    async excluirOrdem(id) {
        this.ordensDeServico = this.ordensDeServico.filter(ordem => ordem.id != id);

        return;
    }
}