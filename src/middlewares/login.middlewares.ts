import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

const validateLoginFields = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.username)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!(body.password)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  
  next();
};

export default validateLoginFields;