const Filme = require("../models/Filme");

async function listarFilmes(req, res) {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarFilme(req, res) {
  try {
    const termoBusca = req.params.id;
    let filme;

    if (/^[0-9a-fA-F]{24}$/.test(termoBusca)) {
      filme = await Filme.findById(termoBusca);
    } else {
      filme = await Filme.findOne({
        titulo: { $regex: termoBusca, $options: 'i' }
      });
    }

    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    res.json(filme);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarFilme(req, res) {
  try {
    const filme = await Filme.create(req.body);
    res.status(201).json(filme);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarFilme(req, res) {
  try {
    const filme = await Filme.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    res.json(filme);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirFilme(req, res) {
  try {
    const filme = await Filme.findByIdAndDelete(req.params.id);

    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarFilmes,
  buscarFilme,
  criarFilme,
  atualizarFilme,
  excluirFilme
};