import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// Fetch all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    if (products.length > 0) {
      res.json({ products: products });
    } else {
      res.json({ message: 'No products found' });
    }
  })
);

// Fetch a single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (product) {
      res.json({ product: product });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
