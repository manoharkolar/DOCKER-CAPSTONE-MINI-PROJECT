const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Payment Service is up!');
});

router.post('/process', (req, res) => {
  const { orderId, amount } = req.body;
  // Add logic to process payment
  res.send(`Payment processed for order ${orderId} with amount $${amount}`);
});

module.exports = router;

