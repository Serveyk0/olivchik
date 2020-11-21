const express = require('express');
const mongoose = require('mongoose');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001
var cors = require('cors');

app.use(cors({origin: 'http://localhost:3005'}));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productRoutes = require("./routes/products.js");
app.use("/api/products", productRoutes);
const menuRoutes = require("./routes/menu.js");
app.use("/api/menu", menuRoutes);
const categoryRoutes = require("./routes/category.js");
app.use("/api/category", categoryRoutes);
async function start() {
  try {
    mongoose.connect('mongodb+srv://STalker19:STalker19@serveyk0.m00fd.mongodb.net/products?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {
      console.log("server start");
    })
  } catch (e) {
    console.log(e);
  }
}
start();
   