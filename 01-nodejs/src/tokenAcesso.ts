// Usando Token de Acesso!

let nome: string = "William Sousa Barbosa";
let idade: number = 33;

let token: string = process.env.TOKEN_DE_ACESSO as string;

let fullName = `Nome completo : ${nome} idade: ${idade}`;
console.log(fullName);
console.log(`TOKEN DE ACESSO: ${token} `);
