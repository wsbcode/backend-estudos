import { writeFile } from "fs/promises";

const exec = async () => {
   const name = ["William", "Barbosa", "wsb"];
   const nameArrumado = name.join("\n");

   console.log("gerando arquivo");

   writeFile("./teste.txt", nameArrumado);
   console.log("arquivo gerada");
};
exec();
