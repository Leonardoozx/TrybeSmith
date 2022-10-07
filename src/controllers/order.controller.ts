import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';
import UserService from '../services/user.service';
import RequestWithUsername from '../interfaces/requestWithUsername.interface';
import User from '../interfaces/user.interface';

export default class OrderController {
  private orderService: OrderService;

  private productService: ProductService;

  private userService: UserService;

  constructor() { 
    this.orderService = new OrderService();
    this.productService = new ProductService();
    this.userService = new UserService();
  }

  public getAllOrders = async (_req: Request, res: Response) => {
    res.status(statusCodes.OK).json(await this.orderService.getAllOrders());
  };

  public insertOrder = async (req: RequestWithUsername, res:Response) => {
    const { body } = req;
    const user = await this.userService.findUserByUsername(req.username as string);
    const { id: userId } = user as User;
    const id = await this.orderService.insertOrder(userId as number);
    await Promise.all(body.productsIds.map(async (productId: number) => {
      await this.productService.updateProduct(id, productId);
    }));
    res.status(statusCodes.CREATED).json({ userId, productsIds: body.productsIds });
  };
}