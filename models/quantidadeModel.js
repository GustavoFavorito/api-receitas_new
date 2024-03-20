const mongoose = require("mongoose");

const quantidadeSchema = mongoose.Schema(
    {
        receitaId: {
            type: Object,
            require: true,
        },
        ingredienteId: {
            type: String,
            require: true,
        },
        quantidade: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const Quantidade = mongoose.model("Quantidade", quantidadeSchema);

module.exports = Quantidade;
