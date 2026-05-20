import express from "express";
import helmet from "helmet";

const server = express();
server.use(helmet());

// Rota padrão usando o método GET e o status 200 (Sucesso)
server.get("/", (req, res) => {
   res.status(200).json({ status: "Servidor rodando perfeitamente!" });
});

// Liga o servidor na porta 3000
server.listen(3000, () => {
   console.log("Servidor ligado na porta 3000! 🚀");
});
