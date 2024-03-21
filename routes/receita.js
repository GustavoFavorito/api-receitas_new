const express = require("express");
const router = express.Router();
const Receita = require("../models/receitaModel");

// SELECT ALL
router.get("/", async (req, res) => {
    try {
        const receita = await Receita.find({});
        res.status(200).json(receita);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// SELECT
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const receita = await Receita.findById(id);
        res.status(200).json(receita);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// INSERT
router.post("/", async (req, res) => {
    try {
        const receita = await Receita.create(req.body);
        res.status(200).json(receita);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let receita = await Receita.findByIdAndUpdate(id, req.body);
        if (!receita) {
            return res.status(404).json({
                message: `can't find any receita with id ${id}`,
            });
        }
        receita = await Receita.findById(id);
        res.status(200).json(receita);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const receita = await Receita.findByIdAndDelete(id);
        if (!receita) {
            return res
                .status(404)
                .json({
                    message: `can't find any receita with id ${id}`,
                });
        }
        res.status(200).json(receita);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
