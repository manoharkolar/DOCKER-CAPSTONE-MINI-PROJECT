const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.render('payment', { message: 'Welcome to the Payment Service!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));

