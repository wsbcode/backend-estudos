import express from "express";
import helmet from "helmet";
import path from "path";
import { send } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

// --- AULAS SOBRE ROTAS ---

server.get("/", (req, res) => {
   res.json("Servidor Online");
});

// 1. Rota Estática Simples: Apenas para teste de conexão
server.get("/foi", (req, res) => {
   // Responde sempre a mesma coisa quando acessam /foi
   res.json({ resposta: "voltou!" });
});

// 2. Rota Estática de Listagem: Geralmente usada para retornar todos os itens
server.get("/produtos", (req, res) => {
   // Aqui retornaria uma lista completa do banco de dados
   res.json({ produtos: [] });
});

// 3. Rota Dinâmica com 1 Parâmetro (:id)
server.get("/produtos/:id", (req, res) => {
   // Usamos a desestruturação para "extrair" o id de dentro do req.params
   const { id } = req.params;

   // Simulamos o retorno de um produto específico usando o id recebido
   res.json({ produtos: [{ id, item: "mouse", price: 50.49 }] });
});

// 4. Rota Dinâmica com Múltiplos Parâmetros (:de e :para)
server.get("/voos/:de/:para", (req, res) => {
   // Extraímos os dois valores da URL de uma só vez
   const { de, para } = req.params;

   res.json({
      voos: {
         // .toLocaleUpperCase() transforma o texto em MAIÚSCULO (ex: gru -> GRU)
         de: de.toLocaleUpperCase(),
         para: para.toLocaleUpperCase(),
         preco: 999,
      },
   });
});

server.listen(3000, () => {
   console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
