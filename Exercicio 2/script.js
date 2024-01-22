//Exercicio 2

// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

//Pseudo Código

// INÍCIO
//   DEFINIR alturaPedro COMO 150
//   DEFINIR alturaLucas COMO 110
//   DEFINIR anos COMO 0

//   ENQUANTO alturaLucas <= alturaPedro FAÇA
//     alturaPedro = alturaPedro + 2
//     alturaLucas = alturaLucas + 3
//     anos = anos + 1
//   FIM ENQUANTO

//   IMPRIMIR anos + " anos até Lucas e Pedro terem a mesma altura."
//   IMPRIMIR (anos + 1) + " anos até Lucas ser maior que Pedro."
// FIM



let alturaPedro = 150;
let alturaLucas = 110;
let anos = 0;

while (alturaLucas <= alturaPedro) {
    alturaPedro += 2;
    alturaLucas += 3;
    anos++;
}

console.log(anos + " anos até Lucas e Pedro terem a mesma altura.");
console.log((anos + 1) + " anos até Lucas ser maior que Pedro.");

