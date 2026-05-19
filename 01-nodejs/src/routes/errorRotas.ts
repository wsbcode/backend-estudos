import type { ErrorRequestHandler, RequestHandler } from "express";

// Middleware para tratar rotas não encontradas (404).
// Como não recebe "err", usa a tipagem padrão RequestHandler.
export const rotaNaoEncontrada: RequestHandler = (req, res) => {
   res.status(404).json({ error: "Rota não encontrada" });
};

// Middleware global para capturar erros internos do servidor (500).
// Usa ErrorRequestHandler porque recebe o parâmetro "err" em primeiro lugar.
export const deuErro: ErrorRequestHandler = (err, req, res, next) => {
   console.log(err); // Exibe o erro real no terminal para o desenvolvedor ver
   res.status(500).json({ error: "Algo deu errado!" }); // Esconde o erro do usuário por segurança
};
