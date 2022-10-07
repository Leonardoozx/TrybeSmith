import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import { JWTsecret } from '../auth/createJWT';

const validateToken = (req:Request, res:Response, next: NextFunction) => {
  const token = req.header('authorization');
  if (!token) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  const tokenValidation = jwt.verify(token, JWTsecret);
  if (!tokenValidation) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  next();
};

export default validateToken;