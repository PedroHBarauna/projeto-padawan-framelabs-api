class UserRepositoryInMemory {
    usuarios = [
        {
            id: 1,
            nome: "Teste 1",
            email: "teste@mail.com",
            senha: "123"
        },
        {
            id: 2,
            nome: "Teste 2",
            email: "teste2@mail.com",
            senha: "123"
        }
    ];

    async create({nome, email, senha}) {
        const novoUsuario = {
            id: Math.floor(Math.random() * 1000) + 1,
            nome,
            email,
            senha
        }

        this.usuarios.push(novoUsuario);

        return novoUsuario.id;
    }



}

module.exports = new UserRepositoryInMemory();