const userRepository = require('../repositories/UserRepository');
const AppError = require("../utils/AppError");

const UserCreateService = require('../services/users/UserCreateService');
const userCreateService = new UserCreateService(userRepository);
class UserController {
    async index(req, res) {
        const usuarios = await userRepository.index();

        if(usuarios.length > 0) {
            return res.json(usuarios);
        }

        throw new AppError('Nenhum usuário cadastrado.');
        
    }

    async show(req, res) {
        const { id } = req.params;
        const usuario = await userRepository.encontrarPorId(id);

        if (!usuario) {
            throw new AppError('Usuário não encontrado.');
        }
        
        return res.json(usuario);
    }

    async create(req, res) {
        const {nome, email, senha} = req.body;

        const user = await userCreateService.execute({nome, email, senha});

        if (user) {
            return res.status(201).json(`${user.nome} - id ${user.id} criado com sucesso!`);
        }

        throw new AppError('Informe nome, email e senha.')
    }

}

module.exports = new UserController();