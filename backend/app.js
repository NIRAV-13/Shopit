var express = require('express');
// var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var app = express();
const cartRouter = require('./routes/cartRouter');
const router = require("./routes/routes.js");
const PORT = process.env.PORT || 8080;

var mongodb = 'mongodb+srv://nirav:Assignment3!@cluster0.dmey5jx.mongodb.net/shopit?retryWrites=true&w=majority';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('database connection successfully'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use('/cart', cartRouter);
app.use("/", router);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
