import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAllOrders);

export default router;