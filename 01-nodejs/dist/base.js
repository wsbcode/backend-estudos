// 1. Importamos as ferramentas: o Express (motor do servidor) e o Helmet (escudo de segurança)
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 2. Criamos o nosso servidor e guardamos ele na variável "server"
const server = express();
// --- CONFIGURAÇÕES (MIDDLEWARES) ---
// 3. Ativa o Helmet para proteger o servidor contra ataques comuns de hackers
server.use(helmet());
// 4. Diz ao servidor para entender mensagens que chegam no formato JSON (objetos de dados)
server.use(express.json());
// 5. Diz ao servidor para entender dados vindo de formulários de sites comuns
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));
// --- ROTAS (CAMINHOS) ---
// 6. Quando alguém acessar o endereço principal (/) usando o método GET...
server.get("/", (req, res) => {
    // Definimos as informações que queremos exibir
    let name = "William Barbosa"; // Seu nome
    let userId = 33; // Sua idade/ID
    // 7. Enviamos a resposta no formato JSON (o navegador ou app recebe como dados)
    // O res.json() já encerra a conexão automaticamente para você
    res.json({ name, userId });
});
// --- INICIALIZAÇÃO ---
// 8. O servidor começa a "ouvir" a porta 3000 e avisa no terminal que está pronto
server.listen(3000, () => {
    console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
