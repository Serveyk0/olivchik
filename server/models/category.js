const { Schema, model } = require('mongoose');

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    href: {
        type: String
    }
});

module.exports = model("category", schema);