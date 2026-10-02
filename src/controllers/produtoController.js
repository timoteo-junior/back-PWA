const Produto = require('../models/Produto');

// 1. CREATE - Criar um novo produto
exports.criarProduto = async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        const produtoSalvo = await novoProduto.save();
        res.status(201).json(produtoSalvo);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar produto', erro: error.message });
    }
};

// 2. READ - Listar todos os produtos
exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar produtos', erro: error.message });
    }
};

// 3. READ - Buscar um produto específico por ID
exports.buscarProdutoPorId = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar o produto', erro: error.message });
    }
};

// 4. UPDATE - Atualizar um produto
exports.atualizarProduto = async (req, res) => {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } // Retorna o documento atualizado
        );
        if (!produtoAtualizado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar produto', erro: error.message });
    }
};

// 5. DELETE - Deletar um produto
exports.deletarProduto = async (req, res) => {
    try {
        const produtoDeletado = await Produto.findByIdAndDelete(req.params.id);
        if (!produtoDeletado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json({ mensagem: 'Produto deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar produto', erro: error.message });
    }
};