// 1. Importamos as ferramentas: o Express (motor do servidor) e o Helmet (escudo de segurança)
import express from "express";
import helmet from "helmet";
import path from "path"; // Ferramenta nativa para manipular caminhos de pastas e arquivos
import { fileURLToPath } from "url"; // Ferramenta para converter endereços de arquivos (URLs) em caminhos de sistema

// --- CONFIGURAÇÃO DE CAMINHO PARA TYPESCRIPT (MODO MODERNO) ---

// Transforma o endereço do arquivo atual em um caminho que o Windows/Linux entende
const __filename = fileURLToPath(import.meta.url);

// Pega o nome da pasta onde este arquivo (base.ts) está guardado (no seu caso, a pasta 'src')
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

// 6. Configura a pasta "public" para que arquivos (como imagens e .txt) fiquem acessíveis no navegador
// O "../public" diz para o código sair da pasta 'src' e procurar a pasta 'public' na raiz do projeto
server.use(express.static(path.join(__dirname, "../public")));

// --- ROTAS (CAMINHOS) ---

// 7. Quando alguém acessar o endereço principal (/) usando o método GET...
server.get("/", (req, res) => {
   // Definimos as informações que queremos exibir
   let name = "William Barbosa"; // Seu nome
   let userId = 33; // Sua idade/ID

   // 8. Enviamos a resposta no formato JSON
   res.json({ name, userId });
});

// --- INICIALIZAÇÃO ---

// 9. O servidor começa a "ouvir" a porta 3000
server.listen(3000, () => {
   console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
