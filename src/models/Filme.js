const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true
    },
    diretor: {
      type: String,
      required: true
    },
    dataLancamento: {
      type: String
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