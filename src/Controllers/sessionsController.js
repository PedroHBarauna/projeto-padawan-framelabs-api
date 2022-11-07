const { sign } = require("jsonwebtoken");
const authConfig = require("../config/jwt");

const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

class SessionsController {
  async create(req, res) {
    const { email, senha } = req.body;

    const user = await UserRepositoryInMemory.encontrarPorEmail(email.trim());

    if (user) {
      const senhaCorreta = senha == user.senha; // Atualizar com bcrypt

      if (senhaCorreta) {
        const token = sign({}, process.env.AUTH_SECRET, {
          subject: String(user.id),
          expiresIn: authConfig.jwt.expiresIn,
        });

        return res.status(201).json({ user, token });
      }

      throw new AppError("Email ou senha incorreto.");
    }

    throw new AppError("Usuário não encontrado.");
  }
}

module.exports = new SessionsController();
