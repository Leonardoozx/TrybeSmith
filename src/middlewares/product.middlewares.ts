import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

export const validateNameField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.name)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (typeof body.name !== 'string') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"name" must be a string' });
  }
  if ((body.name).length < 3) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  next();
};

export const validateAmountField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.amount)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (typeof body.amount !== 'string') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"amount" must be a string' });
  }
  if ((body.amount).length < 3) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  next();
};
