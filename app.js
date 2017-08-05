const express = require('express');
const Product = require('./db').models.Product;

const app = express();

app.get('/products', (req, res, next)=> {
  Product.findAll()
    .then( products => res.send(products))
    .catch(next);
});

module.exports = app;
