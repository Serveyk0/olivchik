const { Schema, model } = require('mongoose');

let schema = new Schema({
    h1: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});

module.exports = model("product", schema);