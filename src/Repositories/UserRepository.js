
const User = require('../models/User');

module.exports = {
    async criarUsuario({nome, email, senha}) {
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        const user = await User.create(novoUsuario)

        return user.dataValues;
    },

    async encontrarPorEmail(email) {
        const usuario = await User.findOne({
            where: {
                email: email} 
        })
    },

    async index() {
        const users = await User.findAll();

        return users;
    }
}

