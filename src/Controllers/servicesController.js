const AppError = require('../utils/AppError');

const serviceRepository = require('../repositories/ServiceRepository');

const { validarCriarServico, validarEditarServico, validarId } = require('../utils/validateInputs');

class ServicesController {
  // TIPOS de serviço

  // id, nome, descrição, preço

  // criar, atualizar, deletar, mostrar
  async create(req, res) {
    const dadosValidados = validarCriarServico(req.body);

    if (dadosValidados.error) {
      throw new AppError(dadosValidados.error.toString());
    }

    const { nome, descricao, preco } = req.body;

    const nomeIndisponivel = await serviceRepository.buscarServicoPorNome(nome);

    if (nomeIndisponivel) {
      throw new AppError(`Não foi possível cadastrar, pois já existe um serviço chamado ${nome}!`);
    }

    const servico = await serviceRepository.criarServico({
      nome,
      descricao,
      preco,
    });

    return res.status(201).json(`Serviço ${servico.id} - '${nome}' criado.`);
  }

  async index(req, res) {
    const servicos = await serviceRepository.index();

    if (servicos.length > 0) {
      return res.json(servicos);
    }

    throw new AppError('Não foram encontrados registros.');
  }

  async show(req, res) {
    const { id } = req.params;

    const servico = await serviceRepository.buscarServicoPorId(id);

    if (servico) {
      return res.json(servico);
    }

    throw new AppError('Serviço não encontrado.');
  }

  async update(req, res) {
    const idValidado = validarId(req.params);

    if (idValidado.error) {
      throw new AppError(dadosValidados.error.toString());
    }

    const { id } = req.params;

    const dadosValidados = validarEditarServico(req.body);

    if (dadosValidados.error) {
      throw new AppError(dadosValidados.error.toString());
    }

    const { nome, descricao, preco } = req.body;

    const servico = await serviceRepository.buscarServicoPorId(id);

    servico.nome = nome ?? servico.nome;
    servico.descricao = descricao ?? servico.descricao;
    servico.preco = preco ?? servico.preco;
    servico.id = id;

    const servicoAtualizado = await serviceRepository.atualizarInfos(servico);

    return res.status(201).json(servicoAtualizado);
  }

  async delete(req, res) {
    const { id } = req.params;
    const servico = await serviceRepository.buscarServicoPorId(id);

    if (servico) {
      await serviceRepository.excluirServico(id);

      return res.json(`Serviço ${id} excluído com sucesso.`);
    }

    throw new AppError('Serviço não encontrado.');
  }
}

module.exports = new ServicesController();
