var express = require('express');
const { addToCart, getCart,increasceQuantity,decreasceQuantity,removeProduct } = require('../controllers/cart_controllers');
var cartRouter = express.Router();

cartRouter.post('/add_cart',addToCart)
cartRouter.post('/get_cart',getCart)
cartRouter.post('/quantity_inc',increasceQuantity)
cartRouter.post('/quantity_dec',decreasceQuantity)
cartRouter.post('/remove_item',removeProduct)

module.exports = cartRouter;
