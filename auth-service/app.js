const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('login', { message: 'Welcome to the Auth Service!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));

