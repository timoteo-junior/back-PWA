require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const filmeRoutes = require("./routes/filmeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de filmes funcionando" });
});

app.use("/filmes", filmeRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crud_filmes";

// 1. Inicia a ligação ao banco de dados (sem prender o servidor)
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Ligado ao MongoDB com sucesso!"))
  .catch((error) => console.error("Erro ao ligar ao MongoDB:", error.message));

// 2. Inicia o servidor IMEDIATAMENTE para o Render não dar erro de porta
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});