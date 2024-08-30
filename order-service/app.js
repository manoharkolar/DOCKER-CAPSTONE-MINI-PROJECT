const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/order', orderRoutes);

app.get('/', (req, res) => {
  res.render('order', { message: 'Welcome to the Order Service!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));

