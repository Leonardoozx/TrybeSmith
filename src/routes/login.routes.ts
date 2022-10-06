import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import { validateLoginFields, validateUser } from '../middlewares/login.middlewares';

const router = Router();

const loginController = new LoginController();

router.post('/', validateLoginFields, validateUser, loginController.login);

export default router;
