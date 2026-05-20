// ARMAZENO AQUI TODAS AS ROTAS E ATRAVÉS DESSA EXPORTAMOS PARA O SERVIDOR PRINCIPAL

import express from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";
import { interferir } from "../middlewares/interferir.js";

const router = express.Router();

router.use(interferir);
// Rota acessada em caso de nenhum parâmero, apenas pelo link http://localhost:3000/
router.get("/", (req, res) => {
   res.json("Servidor Online");
});

// 1. Rota Estática Simples: Apenas para teste de conexão
router.get("/on", (req, res) => {
   // Responde sempre a mesma coisa quando acessam /foi
   res.json({ resposta: true });
});
router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

export default router;
