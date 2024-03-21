const mongoose = require("mongoose");

const receitaSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        image_path: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        ingredientes: [
            {
                nome: {
                    type: String,
                    required: true,
                },
                quantidade: {
                    type: Number,
                    required: true,
                },
                unidade: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Receita = mongoose.model("Receita", receitaSchema, "receitas");

module.exports = Receita;
