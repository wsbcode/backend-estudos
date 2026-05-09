import express from "express";

const router = express.Router();

// 4. Rota Dinâmica com Múltiplos Parâmetros (:de e :para)
router.get("/:de/:para", (req, res) => {
   // Extraímos os dois valores da URL de uma só vez
   const { de, para } = req.params;

   res.json({
      voos: {
         // .toLocaleUpperCase() transforma o texto em MAIÚSCULO (ex: gru -> GRU)
         de: de.toLocaleUpperCase(),
         para: para.toLocaleUpperCase(),
         preco: 99999,
      },
   });
});
export default router;
