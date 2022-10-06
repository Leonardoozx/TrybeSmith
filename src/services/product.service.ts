import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public insertProduct = (product: Product): Promise<Product> => this.model.insertProduct(product);

  public getAllProducts = async () => {
    const allProducts = await this.model.getAllProducts();
    return allProducts;  
  };
}
