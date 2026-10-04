const express = require("express");
const filmeController = require("../controllers/filmeController");

const router = express.Router();

router.get("/", filmeController.listarFilmes);
router.get("/:id", filmeController.buscarFilme);
router.post("/", filmeController.criarFilme);
router.put("/:id", filmeController.atualizarFilme);
router.delete("/:id", filmeController.excluirFilme);

module.exports = router;