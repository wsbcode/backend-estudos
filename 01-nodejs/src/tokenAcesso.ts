// Usando Token de Acesso!

let nome: string = "William Sousa Barbosa";
let idade: number = 33;

// Buscando o token que está guardado em segredo dentro do arquivo .env
// O "as string" avisa ao TypeScript: "Confia em mim, isso aqui com certeza é um texto"
let token: string = process.env.TOKEN_DE_ACESSO as string;

let fullName = `Nome completo : ${nome} idade: ${idade}`;
console.log(fullName);

// Mostra o token de acesso que veio do arquivo .env no terminal
console.log(`TOKEN DE ACESSO: ${token} `);
