const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/product', productRoutes);

app.get('/', (req, res) => {
  res.render('product', { message: 'Welcome to the Product Service!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));

