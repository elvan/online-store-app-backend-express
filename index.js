import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectToMongoDB from './database/mongoose.js';
import enableCors from './middleware/cors.js';
import products from './seeds/products.js';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('tiny'));
app.use(enableCors);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express Backend is working');
});

app.get('/api/products', (req, res) => {
  res.json({ products: products });
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product._id === id);

  res.json({ product: product });
});

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Express server is running in ${NODE_ENV} mode on port ${PORT}`
    );
  });
});
