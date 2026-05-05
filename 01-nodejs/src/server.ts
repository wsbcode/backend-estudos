import express from "express";

const server = express();

server.get("/", (req, res) => {
   let name: string = "William Barbosa";
   let userId: number = 33;
   let info = `User Logged : ${name} <br> Id:${userId}`;
   res.send(info);
});

server.listen(3000, () => {
   console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
