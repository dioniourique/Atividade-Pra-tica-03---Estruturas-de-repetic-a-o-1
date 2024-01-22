//Exercicio 1

// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

//Pseudo Codigo

// Inicialize um array vazio chamado alturas
// Inicialize menorAltura como infinito
// Inicialize maiorAltura como menos infinito

// Para i de 0 até 14 faça:
//     Solicite ao usuário para inserir a altura da pessoa i+1 e armazene em altura
//     Converta altura para um número e adicione ao array alturas

//     Se i é igual a 0 então:
//         Defina menorAltura e maiorAltura como altura
//     Senão:
//         Se altura é menor que menorAltura então defina menorAltura como altura
//         Se altura é maior que maiorAltura então defina maiorAltura como altura

// Exiba "A menor altura do grupo é: " + menorAltura
// Exiba "A maior altura do grupo é: " + maiorAltura




let alturas = [];
let menorAltura, maiorAltura;

for(let i = 0; i < 15; i++) {
    let altura = +prompt("Digite a altura da pessoa " + (i+1));
    alturas.push(altura);

    if(i == 0) {
        menorAltura = altura;
        maiorAltura = altura;
    } else {
        if(altura < menorAltura) menorAltura = altura;
        if(altura > maiorAltura) maiorAltura = altura;
    }
}

console.log("A menor altura do grupo é: " + menorAltura);
console.log("A maior altura do grupo é: " + maiorAltura);

