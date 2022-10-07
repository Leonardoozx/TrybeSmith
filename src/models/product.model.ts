import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public insertProduct = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  };

  public getAllProducts = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as Product[];
  };

  public updateProduct = async (id: number, productId: number) => {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [id, productId],
    );
  }; 
}