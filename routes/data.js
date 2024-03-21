const express = require("express");
const router = express.Router();
const Receita = require("../models/receitaModel");
const Ingrediente = require("../models/ingredienteModel");
const Quantidade = require("../models/quantidadeModel");

// SELECT ALL
router.get("/:table", async (req, res) => {
    try {
        const { table } = req.params;
        switch (table) {
            case "receita":
                const receita = await Receita.find({});
                res.status(200).json(receita);
                break;
            case "ingrediente":
                const ingrediente = await Ingrediente.find({});
                res.status(200).json(ingrediente);
                break;
            case "quantidade":
                const quantidade = await Quantidade.find({});
                res.status(200).json(quantidade);
                break;
            default:
                break;
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// SELECT
router.get("/:table/:id", async (req, res) => {
    try {
        const { table } = req.params;
        const { id } = req.params;
        switch (table) {
            case "receita":
                const receita = await Receita.findById(id);
                res.status(200).json(receita);
                break;
            case "ingrediente":
                const ingrediente = await Ingrediente.findById(id);
                res.status(200).json(ingrediente);
                break;
            case "quantidade":
                const quantidade = await Quantidade.findById(id);
                res.status(200).json(quantidade);
                break;
            default:
                break;
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* ==================================== AREA DE TESTES ==================================== */
router.get("/:table", async(req, res) => {
    try {
        const { table } = req.params;
        switch (table) {
            case "receita":
                const receita = await Receita.find({});
                res.status(200).json(receita);
                break;
            case "ingrediente":
                const ingrediente = await Ingrediente.find({});
                res.status(200).json(ingrediente);
                break;
            case "quantidade":
                const quantidade = await Quantidade.find({});
                res.status(200).json(quantidade);
                break;
            default:
                break;
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put("/:table/:id", async (req, res) => {
    try {
        const { table } = req.params;
        const { id } = req.params;
        switch (table) {
            case "receita":
                let receita = await Receita.findByIdAndUpdate(id, req.body);
                if (!receita) {
                    return res.status(404).json({
                        message: `can't find any receita with id ${id}`,
                    });
                }
                receita = await Receita.findById(id);
                res.status(200).json(receita);
                break;
            case "ingrediente":
                let ingrediente = await Ingrediente.findByIdAndUpdate(
                    id,
                    req.body
                );
                if (!ingrediente) {
                    return res.status(404).json({
                        message: `can't find any ingrediente with id ${id}`,
                    });
                }
                ingrediente = await Ingrediente.findById(id);
                res.status(200).json(ingrediente);
                break;
            case "quantidade":
                let quantidade = await Quantidade.findByIdAndUpdate(
                    id,
                    req.body
                );
                if (!quantidade) {
                    return res.status(404).json({
                        message: `can't find any quantidade with id ${id}`,
                    });
                }
                quantidade = await Quantidade.findById(id);
                res.status(200).json(quantidade);
                break;
            default:
                break;
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:table/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { table } = req.params;
        switch (table) {
            case "receita":
                const receita = await Receita.findByIdAndDelete(id);
                if (!receita) {
                    return res
                        .status(404)
                        .json({
                            message: `can't find any receita with id ${id}`,
                        });
                }
                res.status(200).json(receita);
                break;
            case "ingrediente":
                const ingrediente = await Ingrediente.findByIdAndDelete(id);
                if (!ingrediente) {
                    return res
                        .status(404)
                        .json({
                            message: `can't find any ingrediente with id ${id}`,
                        });
                }
                res.status(200).json(ingrediente);
                break;
            case "quantidade":
                const quantidade = await Quantidade.findByIdAndDelete(id);
                if (!quantidade) {
                    return res
                        .status(404)
                        .json({
                            message: `can't find any quantidade with id ${id}`,
                        });
                }
                res.status(200).json(quantidade);
                break;
            default:
                break;
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
