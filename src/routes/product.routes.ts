import { Router } from 'express';
import ProductsController from '../controllers/product.controller';
import { validateAmountField, validateNameField } from '../middlewares/product.middlewares';

const productsController = new ProductsController();

const router = Router();

router.get('/', productsController.getAllProducts);
router.post('/', validateNameField, validateAmountField, productsController.insertProduct);

export default router;