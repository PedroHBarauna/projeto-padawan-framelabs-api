
const { json } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async criarUsuario({nome, email, senha}) {
        const novoUsuario = {
            id: Math.floor(Math.random() * 1000) + 1,
            nome: nome,
            email: email,
            senha: senha
        }

        const user = await User.create({novoUsuario})

        return json(user);
    },

    async encontrarPorId(id) {
        const usuario = this.usuarios.find(usuario => usuario.id == id);
        
        return usuario;
    },

    async index() {
        return this.usuarios;
    },

    async encontrarPorEmail(email) {
        const usuarioComEsteEmail = this.usuarios.find(usuario => usuario.email == email);

        return usuarioComEsteEmail;
    }
}

