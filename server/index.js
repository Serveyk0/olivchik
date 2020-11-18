const express = require("express")
const consola = require("consola")
const { Nuxt, Builde } = require("nuxt")
const app = express()
const mongoose = require("mongoose");
mongoose.Schema.Types.Boolean.convertToFalse.add("");
const bodyParser = require("body-parser");
const uri = "mongodb+srv://STalker19:<password>@serveyk0.m00fd.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))
app.use(bodyParser.json())
app.use(express.json())

const products_routes = require("./routes/products");
app.use("/api/products", products_routes);




const config = require('../nuxt.config,js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.options.server
    await nuxt.ready()
    if (config.dev)
    {
        const builder = new builder(nuxt)
        await builder.build()
    }
    app.use(nuxt.render)
    app.listen(port, host)
    consola.ready({
        message: "server listening",
        badge: true
    })
}
start()