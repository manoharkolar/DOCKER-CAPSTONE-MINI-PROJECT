const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Product Service is up!');
});

router.post('/add', (req, res) => {
  const { productName, price } = req.body;
  // Add logic to save product details
  res.send(`Product ${productName} added with price $${price}`);
});

module.exports = router;

