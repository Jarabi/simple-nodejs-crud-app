const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const productRoute = require('./routes/product.route');

// Database connection
dotenv.config();

const db_user = process.env.DB_USER;
const passphrase = process.env.PASSPHRASE;
const database = process.env.DATABASE;
const port = process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://${db_user}:${passphrase}@nodebackend.qxdzdtm.mongodb.net/${database}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log('Listening on port 3000');
    });
  })
  .catch((err) => {
    console.log('Connection failed', err);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API server');
});
