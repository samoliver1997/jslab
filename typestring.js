const texto1 = "Teste de string, Ola mundo!!";
const texto2 = 'Teste de string, Ola mundo!!';
const senha = "senhauser";
const stringdenumeros = "324929";

const citacao = 'Meu nome é: ';
const meunome = "Samuel";

//concatenacao (+)

console.log(citacao + meunome)

//template string ou template literal

//comparando strings case sensitive
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); //tratamento de string para minusculo

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres