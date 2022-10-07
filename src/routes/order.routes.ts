import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateProductIdsField from '../middlewares/order.middlewares';
import validateToken from '../middlewares/validateToken.middleware';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAllOrders);
router.post('/', validateToken, validateProductIdsField, orderController.insertOrder);

export default router;