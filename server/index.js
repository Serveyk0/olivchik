const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const mongoose = require('mongoose');
mongoose.Schema.Types.Boolean.convertToFalse.add("");
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://STalker19:STalker19@serveyk0.m00fd.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connect to db"));

app.use(bodyParser.json());
app.use(express.json());

const productRoutes = require("./routes/products.js");
app.use("/api/products", productRoutes);

const config = require("../nuxt.config");
config.dev = process.env.NODE_ENV !== "peoduction";


async function start () 
{
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;
  await nuxt.ready();
  if ( config.dev )
  {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  app.use(nuxt.render);
  app.listen(8001, host)
  consola.ready({
    message: `server listening in http://${host}:${port}`,
    badge: true
  })
}
start();