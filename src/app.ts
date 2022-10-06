import express from 'express';
import productsRouter from './routes/product.routes';
import usersRouter from './routes/user.routes';
import orderRouter from './routes/order.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
