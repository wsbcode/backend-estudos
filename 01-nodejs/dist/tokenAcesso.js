// Usando Token de Acesso!
let nome = "William Sousa Barbosa";
let idade = 33;
let token = process.env.TOKEN_DE_ACESSO;
let fullName = `Nome completo : ${nome} idade: ${idade}`;
console.log(fullName);
console.log(`TOKEN DE ACESSO: ${token} `);
export {};
