const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true
    },
    diretor: {
      type: String,
      required: true
      // Removido o 'unique: true' para permitir vários filmes do mesmo diretor
    },
    dataLancamento: { // Ajustado para corresponder ao app.js
      type: String    // Ajustado para receber o formato do calendário HTML
    },
    genero: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Filme", filmeSchema);