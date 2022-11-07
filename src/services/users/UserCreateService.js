const AppError = require('../../utils/AppError');
const {hash} = require('bcrypt');

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({nome, email, senha}){
        if (nome && email && senha) {
            email = email.trim().toLowerCase();
            nome = nome.trim();

            const emailIndisponivel = await this.userRepository.encontrarPorEmail(email);

            if (emailIndisponivel) {
                throw new AppError('Este email já está cadastrado.');
            }

            const senhaComHash = await hash(senha, 8);

            const user = await this.userRepository.criarUsuario({ nome, email, senha: senhaComHash });
    
            if (user) {
                return user;
            }
        }
        throw new AppError('Informe nome, email e senha.')
    }
}

module.exports = UserCreateService;