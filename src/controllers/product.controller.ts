import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductsService from '../services/product.service';

export default class ProductsController {
  constructor(private productService = new ProductsService()) {}

  insertProduct = async (req: Request, res: Response) => {
    const newProduct = await this.productService.insertProduct(req.body);
    res.status(statusCodes.CREATED).json(newProduct);
  };
}