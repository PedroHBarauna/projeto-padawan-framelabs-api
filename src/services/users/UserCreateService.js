const AppError = require("../../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ nome, email, senha }) {
    if (nome && email && senha) {
      email = email.trim().toLowerCase();
      nome = nome.trim();

      const emailIndisponivel = await this.userRepository.encontrarPorEmail(
        email
      );

      if (emailIndisponivel) {
        throw new AppError("Este email já está cadastrado.");
      }

      const user = await this.userRepository.criarUsuario({
        nome,
        email,
        senha,
      });

      if (user) {
        return user;
      }
    }
    throw new AppError("Informe nome, email e senha.");
  }
}

module.exports = UserCreateService;
