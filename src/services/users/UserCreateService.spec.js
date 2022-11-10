/* eslint-disable no-undef */
const AppError = require('../../utils/AppError');

const userRepositoryInMemory = require('../../Repositories/UserRepositoryInMemory');
const UserCreateService = require('./UserCreateService');

describe('Caso de criação de usuário', () => {
  let userCreateService = null;

  beforeEach(async () => {
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });

  it('Devo criar um usuário', async () => {
    const userId = await userCreateService.execute({
      email: 'teste3@mail.com',
      nome: 'Teste 4',
      senha: '123',
    });

    expect(userId).toEqual(expect.any(Number));
  });

  it('Devo retornar um erro caso o email já esteja cadastrado.', async () => {
    await userCreateService.execute({
      email: 'teste4@mail.com',
      nome: 'Teste 5',
      senha: '123',
    });

    expect(async () => {
      await userCreateService.execute({
        email: 'teste4@mail.com',
        nome: 'Teste 4',
        senha: '456',
      });
    }).rejects.toEqual(new AppError('Este email já está cadastrado.'));
  });
});
