import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectToMongoDB from './database/mongoose.js';
import enableCors from './middleware/cors.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('tiny'));
app.use(enableCors);
app.use(express.json());

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Express Backend is working');
});

app.use(notFoundHandler);
app.use(errorHandler);

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Express server is running in ${NODE_ENV} mode on port ${PORT}`
    );
  });
});
