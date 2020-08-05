import AppError from '@shared/errors/AppError';

import FakeEmailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import SendForgotPasswordService from './SendForgotPasswordService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeMailProvider: FakeEmailProvider;
let sendForgotPassword: SendForgotPasswordService;

describe('SendForgotPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeEmailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgotPassword = new SendForgotPasswordService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('should be able to recover the password using the registerd e-mail', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await sendForgotPassword.execute({
      email: 'johndoe@email.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPassword.execute({
        email: 'johndoe@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await sendForgotPassword.execute({
      email: 'johndoe@email.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
