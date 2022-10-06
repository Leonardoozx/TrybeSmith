import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import tokenGenerator from '../auth/createJWT';

export default class Login {
  public login = (req: Request, res: Response) => {
    const { body: { username } } = req;
    const token = tokenGenerator(username);
    res.status(statusCodes.OK).json({ token });
  }; 
}