const mongoose = require("mongoose");

const ingredienteSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: true,
        },
        unidade: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Ingrediente = mongoose.model("Ingrediente", ingredienteSchema, 'ingredientes');

module.exports = Ingrediente;
