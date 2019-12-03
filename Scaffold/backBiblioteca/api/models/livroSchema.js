const mongoose = require('mongoose');

const livroSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true },
    valor: { type: Number, required: true },
});

module.exports = mongoose.model('livro', livroSchema);