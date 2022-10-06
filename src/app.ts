import express from 'express';
import productsRouter from './routes/product.routes';
import usersRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
