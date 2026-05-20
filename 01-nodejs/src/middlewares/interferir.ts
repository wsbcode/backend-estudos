import type { RequestHandler } from "express";

// Criando um middleware chamado "interferir" usando a tipagem padrão de rotas.
export const interferir: RequestHandler = (req, res, next) => {
   // Cria uma variável simulando se o usuário está logado (false = não está logado)
   let logged = false;

   // Se a variável "logged" for verdadeira (true)...
   if (logged) {
      next(); // ...chama o next() para liberar o usuário para a próxima rota.
   } else {
      // Se for falsa (false), barra o usuário enviando o status 403 (Proibido)
      // ATENÇÃO: Como não chamamos o next() aqui, a requisição morre neste ponto!
      res.status(403).json({ error: "Middleware não permitiu o acesso" });
   }
};
