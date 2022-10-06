import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productsController = new ProductsController();

const router = Router();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.insertProduct);

export default router;