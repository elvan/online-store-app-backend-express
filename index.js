const express = require('express');
const morgan = require('morgan');

const enableCors = require('./middleware/cors.js');
const products = require('./seeds/products');

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
