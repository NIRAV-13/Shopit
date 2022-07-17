const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: String,
    productBrand: String,
    productCategory: String,
    productPrice: Number,
    productDescription: String,
    productImage: String,
    createdDate: Date,
    // size: String,
    // updatedDate: Date, 
})

const products = mongoose.model("products", productSchema);
module.exports = products;