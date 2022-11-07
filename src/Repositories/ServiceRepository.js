const Service = require('../models/Service');

module.exports = {    
    async criarServico({nome, descricao, preco}) {
        const novoServico = {
            nome,
            descricao,
            preco
        }

        const service = Service.create(novoServico);

        return service.dataValues;
    },

    async index() {
        const service = Service.findAll();

        return service;
    },

    async buscarServicoPorId(servicoId) {
        const service = Service.findOne({
            where: {
                id: servicoId
            }
        })

        return service;
    },

    async atualizarInfos({id, nome, descricao, preco}) {
        const servicoAtualizado = this.servicos.map(servico =>  {
            if(servico.id == id) {
                servico.nome = nome ?? servico.nome;
                servico.descricao = descricao ?? servico.descricao;
                servico.preco = preco ?? servico.preco;                
                return servico;
            }
        });

        return servicoAtualizado;
    },

    async excluirServico(id) {
        this.servicos = this.servicos.filter(servico => servico.id != id);

        return;
    }
}
