const express = require("express");
const orderController = require("../controllers/orderController");
const admin = require("../controllers/admin")
const router = express.Router();

router.get("/order/get", orderController.getOrders);
router.get("/admin", admin.list);
router.post("/delete", admin.delete_user);
//router.post("/view", admin.view_user);
module.exports = router;