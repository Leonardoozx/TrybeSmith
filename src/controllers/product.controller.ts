import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public insertProduct = async (req: Request, res: Response) => {
    const newProduct = await this.productService.insertProduct(req.body);
    res.status(statusCodes.CREATED).json(newProduct);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    res.status(statusCodes.OK).json(await this.productService.getAllProducts());
  };
}