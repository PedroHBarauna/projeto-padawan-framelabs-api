class UserRepositoryInMemory {
  usuarios = [
    {
      id: 1,
      nome: "Teste 1",
      email: "teste@mail.com",
      senha: "123",
    },
    {
      id: 2,
      nome: "Teste 2",
      email: "teste2@mail.com",
      senha: "123",
    },
  ];

  async criarUsuario({ nome, email, senha }) {
    const novoUsuario = {
      id: Math.floor(Math.random() * 1000) + 1,
      nome,
      email,
      senha,
    };

    this.usuarios.push(novoUsuario);

    return novoUsuario.id;
  }

  async encontrarPorId(id) {
    const usuario = this.usuarios.find((usuario) => usuario.id == id);

    return usuario;
  }

  async index() {
    return this.usuarios;
  }

  async encontrarPorEmail(email) {
    const usuarioComEsteEmail = this.usuarios.find(
      (usuario) => usuario.email == email
    );

    return usuarioComEsteEmail;
  }
}

module.exports = new UserRepositoryInMemory();
