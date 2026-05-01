import express from "express";
const server = express();
server.get("/", (req, res) => {
    let name = "William Barbosa";
    let userId = 33;
    res.write(`User Logged : ${name}\n`);
    res.write(`Id:${userId}`);
    res.end();
});
server.listen(3000, () => {
    console.log("Servidor rodando...");
    console.log("Link: http://localhost:3000/");
});
