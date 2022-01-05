const express = require('express');

const products = require('./seeds/products');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Express Backend is working');
});

app.get('/api/products', (req, res) => {
  res.json({
    data: {
      products: products,
    },
    meta: {
      status: 200,
      message: 'Success',
    },
  });
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product._id === id);

  res.json({
    data: {
      product: product,
    },
    meta: {
      status: 200,
      message: 'Success',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
