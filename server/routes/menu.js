const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");

router.get("/", async (req, res) => 
{
    try {
        const _menu = await Menu.find({  })
        .select("href name");
        await res.json(_menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/", async (req, res, next) => 
{
    const menu = new Menu({
        name: req.body.name,
        href: req.body.href
    });
    try {
        const new_menu = menu.save();
        await res.status(201).json(new_menu);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;