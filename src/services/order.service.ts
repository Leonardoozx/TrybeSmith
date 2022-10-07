import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAllOrders = async (): Promise<Order[]> => {
    const orders = await this.model.getAllOrders(); 
    return orders;
  };

  public insertOrder = async (id: number): Promise<number> => {
    const insertId = await this.model.insertOrder(id);
    return insertId;
  };
}
