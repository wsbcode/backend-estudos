import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/mainRotas.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

// ROTA ESPOTADA MAIN COM TODOS OS SERVIDORES
server.use("/", router);

server.listen(3000, () => {
   console.log("Servidor Online PORTA: http://localhost:3000/");
});
