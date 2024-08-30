const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Order Service is up!');
});

router.post('/create', (req, res) => {
  const { productId, quantity } = req.body;
  // Add logic to create an order
  res.send(`Order created for product ${productId} with quantity ${quantity}`);
});

module.exports = router;

