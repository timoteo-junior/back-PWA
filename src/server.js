const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });