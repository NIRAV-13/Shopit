var mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true
    },
    delivery: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;