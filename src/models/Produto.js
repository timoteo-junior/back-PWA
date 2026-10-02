const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    quantidadeEmEstoque: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Produto', produtoSchema);