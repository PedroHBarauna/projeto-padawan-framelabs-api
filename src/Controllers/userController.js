const { response } = require("express");

const userRepository = require('../Repositories/UserRepositoryInMemory');

class UserController {
    async index(req, res) {
        return res.send('Hello, World');
    }

    async show (req, res) {
        const userId = req.params;

        return res.json({userId});
    }

    async create(req, res) {
        const {nome, email, senha} = req.body;

        const userId = await userRepository.create({nome, email, senha});



        return res.status(201).json(`${nome} - id ${userId} criado com sucesso!`);
    }

}

module.exports = new UserController();