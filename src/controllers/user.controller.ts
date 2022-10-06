import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/user.service';
import tokenGenerator from '../auth/createJWT';

export default class UserController {
  constructor(private userService = new UserService()) {}

  insertUser = async (req: Request, res: Response) => {
    const { body: { username, classe, level } } = req;
    await this.userService.insertUser(req.body);
    const token = tokenGenerator(username, classe, level);
    res.status(statusCodes.CREATED).json({ token });
  };
}
