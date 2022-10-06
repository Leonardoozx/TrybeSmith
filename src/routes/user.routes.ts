import { Router } from 'express';
import UserController from '../controllers/user.controller';
import {
  validateClasseField,
  validateLevelField,
  validatePasswordField,
  validateUsernameField,
} from '../middlewares/user.middlewares';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  validateUsernameField,
  validateClasseField,
  validateLevelField,
  validatePasswordField,
  userController.insertUser,
);

export default router;
