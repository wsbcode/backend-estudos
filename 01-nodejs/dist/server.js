import express from "express";
const server = express();
server.get("/", (req, res) => {
    let name = "William Barbosa";
    let userId = 33;
    let info = `User Logged : ${name} <br> Id:${userId}`;
    res.send(info);
});
server.listen(3000, () => {
    console.log("Servidor rodando... PORTA: http://localhost:3000/");
});
