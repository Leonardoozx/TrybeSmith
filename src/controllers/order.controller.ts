import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    res.status(statusCodes.OK).json(await this.orderService.getAllOrders());
  };

  public insertOrder = async (req:Request, res:Response) => {
    res.status(statusCodes.CREATED).json({ message: 'is working' });
  };
}