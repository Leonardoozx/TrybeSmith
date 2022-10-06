import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productsController = new ProductsController();

const router = Router();

router.use('/', productsController.insertProduct);

export default router;