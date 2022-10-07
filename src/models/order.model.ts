import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAllOrders = async (): Promise<Order[]> => {
    const [results] = await this.connection.execute(
      `SELECT 
        ord.id,
        ord.userId,
        JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS products
      ON products.orderId = ord.id
      GROUP BY products.orderId`,
    );
    return results as Order[];
  };

  public insertOrder = async (id: number): Promise<number> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );
    return insertId;
  };
}