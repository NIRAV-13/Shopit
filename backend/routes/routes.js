const express = require("express");
const orderController = require("../controllers/orderController");
var router = express.Router();

router.get("/order/get", orderController.getOrders);
module.exports = router;