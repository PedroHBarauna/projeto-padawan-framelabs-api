const Joi = require('joi');

function validarCriarServico(dadosParaValidar) {
  const regrasPermitidas = Joi.object({
    preco: Joi.number().required().min(1).max(1000),
    nome: Joi.string().max(50).required(),
    descricao: Joi.string().max(500).required(),
  });

  return regrasPermitidas.validate(dadosParaValidar);
}

function validarEditarServico(dadosParaValidar) {
  const regrasPermitidas = Joi.object({
    preco: Joi.number().min(1).max(1000),
    nome: Joi.string().max(50),
    descricao: Joi.string().max(500),
  });

  return regrasPermitidas.validate(dadosParaValidar);
}

function validarId(dadoId) {
  const regra = Joi.object({
    id: Joi.number().required(),
  });

  return regra.validate(dadoId);
}

module.exports = { validarCriarServico, validarEditarServico, validarId };
