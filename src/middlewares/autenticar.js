const authConfig = require("../config/jwt");
const AppError = require("../utils/AppError");
const { verify } = require("jsonwebtoken");
const { encontrarPorEmail } = require("../repositories/UserRepositoryInMemory");

async function autenticar(req, res, next) {
  const tokenComBearer = req.headers.authorization;

  if (tokenComBearer) {
    const [, token] = tokenComBearer.split(" ");

    try {
      const { sub: userId } = verify(token, authConfig.jwt.secret);

      req.user = {
        id: Number(userId),
      };

      return next();
    } catch {
      throw new AppError("Token de autorização inválido.", 401);
    }
  } else {
    throw new AppError("Token de autorização não encontrado.", 401);
  }
}

module.exports = autenticar;
