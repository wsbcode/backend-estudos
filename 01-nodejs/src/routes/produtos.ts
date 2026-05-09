import express from "express";

const router = express.Router();

// 2. Rota Estática de Listagem: Geralmente usada para retornar todos os itens
router.get("/", (req, res) => {
   // Aqui retornaria uma lista completa do banco de dados
   res.json({ produtos: [] });
});

// 3. Rota Dinâmica com 1 Parâmetro (:id)
router.get("/:id", (req, res) => {
   // Usamos a desestruturação para "extrair" o id de dentro do req.params
   const { id } = req.params;

   // Simulamos o retorno de um produto específico usando o id recebido
   res.json({ produtos: [{ id, item: "mouse", price: 50.49 }] });
});

export default router;
