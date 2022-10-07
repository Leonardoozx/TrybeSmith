import * as jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import statusCodes from '../statusCodes';
import { JWTsecret } from '../auth/createJWT';
import RequestWithUsername from '../interfaces/requestWithUsername.interface';

const validateToken = (req: RequestWithUsername, res:Response, next: NextFunction) => {
  const token = req.header('authorization');
  if (!token) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  try {
    const tokenValidation = jwt.verify(token, JWTsecret);
    const { data } = tokenValidation as { data: string };
    req.username = data[0] as string;
  } catch (_e) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  next();
};

export default validateToken;