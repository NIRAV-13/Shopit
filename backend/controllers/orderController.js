const express = require("express");
const orderModel = require("../models/orderModel");
/**
 * This function adds a new order into the db. This functionality is available to the users who are registered with our website.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

 const getOrders = async (req, res) => {
    const orders = await orderModel.find({})
    console.log(orders)
    if (orders == null) {

        return res.status(401).send({ error: true, msg: 'User data missing' })
    }
    try {
        res.send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
 }

 const controller = {getOrders};

 module.exports = controller;