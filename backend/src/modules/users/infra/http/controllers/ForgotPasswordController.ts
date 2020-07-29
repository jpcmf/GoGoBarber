import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordService from '@modules/users/services/SendForgotPasswordService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPassword = container.resolve(SendForgotPasswordService);

    await sendForgotPassword.execute({
      email,
    });

    return res.status(204).json();
  }
}
