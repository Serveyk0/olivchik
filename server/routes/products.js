const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.get("/", async (req, res) => 
{
    try {
        debugger;
        const p = await Product.find();
        await res.json(p);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;