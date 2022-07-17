var express = require('express');
var mongoose = require('mongoose');
var cors = require("cors")
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const productRouter = require('./routes/Products')
const giftCardRouter = require("./routes/Giftcards");
const PORT = process.env.PORT || 8080;
var app = express();
app.use(cors())

var mongodb = 'mongodb+srv://nirav:Assignment3!@cluster0.dmey5jx.mongodb.net/shopit?retryWrites=true&w=majority';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('database connection successfully'));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/cart',cartRouter);
app.use("/", orderRouter);
app.use("/", productRouter)
app.use("/", giftCardRouter);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
