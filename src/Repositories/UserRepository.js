const User = require('../models/User');

module.exports = {
  async criarUsuario({ nome, email, senha }) {
    const novoUsuario = {
      nome,
      email,
      senha,
    };

    const user = await User.create(novoUsuario);

    return user.dataValues;
  },

  async encontrarPorEmail(email) {
    const usuario = await User.findOne({
      where: {
        email,
      },
    });

    return usuario;
  },

  async index() {
    const users = await User.findAll();

    return users;
  },

  async encontrarPorId(id) {
    const usuario = await User.findOne({
      where: { id },
    });

    return usuario;
  },
};
