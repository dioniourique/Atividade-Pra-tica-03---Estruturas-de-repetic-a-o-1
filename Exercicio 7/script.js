//Exercicio 7

// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

//PseudoCodigo

// Iniciar
//   Definir numeros = lista vazia
//   Definir positivos = 0
//   Definir negativos = 0

//   Para i de 1 até 10 faça
//     Definir num = Ler um número do usuário
//     Adicionar num à lista numeros
//     Se num > 0 então
//       Incrementar positivos
//     Senão Se num < 0 então
//       Incrementar negativos
//     Fim-Se
//   Fim-Para

//   Definir media = soma de todos os números em numeros dividido pelo tamanho de numeros
//   Definir percentualPositivos = (positivos dividido pelo tamanho de numeros) * 100
//   Definir percentualNegativos = (negativos dividido pelo tamanho de numeros) * 100

//   Escrever "Média aritmética: " + media
//   Escrever "Quantidade de positivos: " + positivos
//   Escrever "Quantidade de negativos: " + negativos
//   Escrever "Percentual de positivos: " + percentualPositivos + "%"
//   Escrever "Percentual de negativos: " + percentualNegativos + "%"
// Fim


let numeros = [];
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 10; i++) {
    let num = prompt("Digite um número:");
    numeros.push(Number(num));
    if(num > 0) {
        positivos++;
    } else if(num < 0) {
        negativos++;
    }
}

let media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
let percentualPositivos = (positivos / numeros.length) * 100;
let percentualNegativos = (negativos / numeros.length) * 100;

console.log("Média aritmética: " + media);
console.log("Quantidade de positivos: " + positivos);
console.log("Quantidade de negativos: " + negativos);
console.log("Percentual de positivos: " + percentualPositivos + "%");
console.log("Percentual de negativos: " + percentualNegativos + "%");
