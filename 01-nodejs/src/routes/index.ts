import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.json("Servidor Online");
});

// 1. Rota Estática Simples: Apenas para teste de conexão
router.get("/foi", (req, res) => {
   // Responde sempre a mesma coisa quando acessam /foi
   res.json({ resposta: "voltou!" });
});

export default router;
