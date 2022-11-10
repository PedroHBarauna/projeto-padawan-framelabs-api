const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const authConfig = require('../config/jwt');

const userRepository = require('../repositories/userRepository');
const AppError = require('../utils/AppError');

class SessionsController {
  async create(req, res) {
    const { email, senha } = req.body;

    const user = await userRepository.encontrarPorEmail(email.trim());

    if (user) {
      const senhaCorreta = await compare(senha, user.senha);

      if (senhaCorreta) {
        const token = sign({}, process.env.AUTH_SECRET, {
          subject: String(user.id),
          expiresIn: authConfig.jwt.expiresIn,
        });

        return res.status(201).json({ user, token });
      }

      throw new AppError('Email ou senha incorreto.');
    }

    throw new AppError('Usuário não encontrado.');
  }
}

module.exports = new SessionsController();
