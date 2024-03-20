const mongoose = require('mongoose')

const quantidadeSchema = mongoose.Schema(
    {
        receita: {
            type: Number,
            require: true
        },
        ingrediente: {
            type: Number,
            require: true
        },
        quantidade: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Quantidade = mongoose.model('Quantidade', quantidadeSchema);

module.exports = Quantidade;