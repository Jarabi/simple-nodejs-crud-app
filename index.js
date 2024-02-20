const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route');

// Database connection
mongoose
  .connect(
    'mongodb+srv://jarabialex:4RQLXxly3pU4V8S0@nodebackend.qxdzdtm.mongodb.net/node-crud-api?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
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
