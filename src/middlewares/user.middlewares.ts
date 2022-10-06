import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';

export const validateUsernameField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.username)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (typeof body.username !== 'string') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"username" must be a string' });
  }
  if ((body.username).length < 3) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  next();
};

export const validateClasseField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.classe)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"classe" is required' });
  }
  if (typeof body.classe !== 'string') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"classe" must be a string' });
  }
  if ((body.classe).length < 3) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"classe" length must be at least 3 characters long',
    });
  }
  next();
};

export const validateLevelField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (body.level < 1) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  if (!(body.level)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof body.level !== 'number') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"level" must be a number' });
  }
  next();
};

export const validatePasswordField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.password)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (typeof body.password !== 'string') {
    return res.status(statusCodes.SEMANTIC_ERROR).json({ message: '"password" must be a string' });
  }
  if ((body.password).length < 9) {
    return res.status(statusCodes.SEMANTIC_ERROR).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  next();
};
