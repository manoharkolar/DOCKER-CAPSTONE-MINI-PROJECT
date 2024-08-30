const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { message: 'Please login' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add authentication logic here
  res.send(`User ${username} logged in successfully!`);
});

module.exports = router;

