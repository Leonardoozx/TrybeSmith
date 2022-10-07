import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken.middleware';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAllOrders);
router.post('/', validateToken, orderController.insertOrder);

export default router;