const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Products = new Schema({
    h1: {
        type: String
    },
}, { timestamps: true })
delete mongoose.connection.models['product'];
// module.exports = mongoose.model.product || mongoose.model("product", Products)
const Product = mongoose.model("product", Products) // use this History  const to access your history schema every where in your application
module.exports = Product