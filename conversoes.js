// tipo de dado
// booleanos

//conversao implicita
const numero = 10;
const numerostring = "10";

console.log(numero == numerostring) //compara os valores forçando a conversao
console.log(numero === numerostring) //compara os tipos e valor

console.log(numero + numerostring)

//conversao explicita

//Number() - função para converter em numero
//String() e/ou toString() - função para converter em string

console.log(numero + Number(numerostring))