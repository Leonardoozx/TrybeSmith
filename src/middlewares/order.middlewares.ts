import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

const validateProductIdsField = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (!(body.productsIds)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  if (typeof body.productsIds !== 'object') {
    return res.status(statusCodes.SEMANTIC_ERROR)
      .json({ message: '"productsIds" must be an array' });
  }
  if ((body.productsIds).length < 1) {
    return res.status(statusCodes.SEMANTIC_ERROR)
      .json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export default validateProductIdsField;