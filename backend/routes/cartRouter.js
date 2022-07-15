var express = require('express');
const { addToCart } = require('../controllers/cart_controllers');
var cartRouter = express.Router();

cartRouter.post('/add_cart',addToCart)
module.exports = cartRouter;