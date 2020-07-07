// import AppError from '@shared/errors/AppError';

import FakeEmailProvider from '@shared/container/providers/MailProdiveder/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordService from './SendForgotPasswordService';

describe('SendForgotPassword', () => {
  it('should be able to recover the password using the registerd e-mail', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeEmailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPassword = new SendForgotPasswordService(
      fakeUsersRepository,
      fakeMailProvider,
    );

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await sendForgotPassword.execute({
      email: 'email@email.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
