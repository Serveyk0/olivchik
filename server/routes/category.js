const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router.get("/", async (req, res) => 
{
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _category = await Category.find()
        await res.json(_category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/", async (req, res, next) => 
{
    const category = new Category({
        name: req.body.name,
        href: req.body.href
    });
    try {
        const new_category = category.save();
        await res.status(201).json(new_category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;