const mongoose = require("mongoose");

const receitaSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            require: true,
        },
        image_path: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Receita = mongoose.model("Receita", receitaSchema);

module.exports = Receita;
