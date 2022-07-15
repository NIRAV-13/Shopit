const express = require("express");
const CartModel = require("../models/cart_model");

/**
 * This function adds a new product into a cart. This functionality is available to the users who are registered with our website.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function addToCart(req, res) {
    try {
        const userid = req.body.user_id
        const cart = await CartModel.findOne({ user_id: userid })
        let products = req.body.product
        const pid = products._id
        const pname = products.productName
        const pprice = products.productPrice
        const pquantity = 1
        if (!cart) {
            const new_cart_obj = await CartModel.create({
                user_id: userid,
                product: [
                    {
                        product_id: pid, product_name: pname, product_price: pprice, product_quantity: pquantity
                    }
                ],
                coupon: "SHOPITNEW"
            })
            return res.status(201).json({
                "cart": new_cart_obj
            })

        } else {
            cart.product.push({
                product_id: pid, product_name: pname, product_price: pprice, product_quantity: pquantity
            })
            await cart.save()
            return res.status(200).json({
                "cart": cart
            })

        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            "message": "something went wrong"
        })
    }
}

// async function getCart(req,res){
//     try{
        

//     }catch(err){
//         console.log(err);
//         return res.status(500).json({
//             "message": "something went wrong"
//         })
//     }
// }

module.exports = { addToCart }