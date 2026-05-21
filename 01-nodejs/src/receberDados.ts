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
   console.log("PARAMS", req.params);
   console.log("QUERY", req.query);
   console.log("BODY", req.body);

   let name = "William Barbosa";
   let age = 33;

   res.json({ name, age });
});

server.listen(3000, () => {
   console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
