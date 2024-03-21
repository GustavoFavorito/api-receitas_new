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
                type: mongoose.Schema.Types.ObjectId,
                ref: "ingrediente",
            }
        ],
    },
    {
        timestamps: true,
    }
);

const Receita = mongoose.model("Receita", receitaSchema, 'receitas');

module.exports = Receita;
