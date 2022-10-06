import express from 'express';
import productsRouter from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
