//parametros de função


function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(10, 20));

//parametros x argumentos


//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é: ${nome} e minha idade é: ${idade}`
}

console.log(nomeIdade());

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(5, 4)));