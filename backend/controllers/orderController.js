const express = require("express");
const orderModel = require("../models/orderModel");
const { v4: uuidv4 } = require('uuid');

/**
 * This function adds a new order into the db. This functionality is available to the users who are registered with our website.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const getOrders = async (req, res) => {
    const user_id = req.query.email
    const orders = await orderModel.find({})
    const result = orders.filter((item) => {
        return item['user_id'] === user_id;
    })
    if (orders == null) {
        return res.status(401).send({ error: true, msg: 'User data missing' })
    }
    try {
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
const getTodayDate=()=>{
    const today = new Date()
    const day = today.getDate();        
    const month = today.getMonth();     
    const year = today.getFullYear();

    return day+"/"+month+"/"+year;
}
const getTotalPrice = (products) => {
    var total = 0
    for(const prod of products){
        total= total + prod.price
    }
    console.log(total)
    return total;
}
const addOrder = async (req,res) => {
    const user_id = req.body.user_id
    const prods = req.body.product
    var newOrder = new orderModel({
            status: "pending",
            user_id: user_id,
            date: getTodayDate(),
            price: getTotalPrice(prods),
            number: uuidv4(),
            delivery: "Delivery Pending",
            product: prods
    })
    console.log(newOrder)
    await newOrder.save(function(err,order){
        if(err) return console.error(err);
        console.log(order.number + " saved to order to collection.");
    })
    return res.status(200).send({ order: newOrder });

}
const archiveOrders = async (req, res) => {
    try {
        console.log(req)
        const order_id = req.body.order.number
        console.log(order_id)
         var newOrder = {
            status: "archived",
            user_id: req.body.order.user_id,
            date: req.body.order.date,
            price: req.body.order.price,
            number: req.body.order.number,
            delivery: req.body.order.delivery,
            product: req.body.order.product
        }
        var order = await orderModel.findOneAndUpdate({ number: order_id },newOrder,{overwrite:true})
        console.log(order)
        await order.save()
        return res.status(200).send({ order: order });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            "message": "something went wrong"
        })
    }
}

const controller = { getOrders, archiveOrders, addOrder };

module.exports = controller;