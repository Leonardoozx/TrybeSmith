import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserModel from '../models/user.model';
import connection from '../models/connection';

export const validateLoginFields = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.username)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!(body.password)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }

  next();
};

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const userModel = new UserModel(connection);
  const user = await userModel.findUserByUsername(body.username);
  if (!user || user.username !== body.username || user.password !== body.password) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }
  next();
};