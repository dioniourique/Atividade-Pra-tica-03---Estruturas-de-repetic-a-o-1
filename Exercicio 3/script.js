//Exercicio 3

// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

//Pseudo Codigo

// Solicita ao usuário um número para a tabuada (n) e a quantidade de iterações (i).
// Para cada número de 1 até i, ele imprime a multiplicação desse número pelo número da tabuada.

let n = prompt("Digite o número para a tabuada:");
let i = prompt("Digite a quantidade de iterações:");

for (let j = 1; j <= i; j++) {
    console.log(j + " * " + n + " = " + j * n);
}
