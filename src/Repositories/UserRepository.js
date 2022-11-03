
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
    }
}

