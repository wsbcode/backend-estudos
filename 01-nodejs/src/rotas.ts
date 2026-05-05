import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.get("/", (req, res) => {
   let name = "William Barbosa";
   let userId = 33;
   res.json({ name, userId });
});

server.listen(3000, () => {
   console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
