// Exercicio 4

// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

//PseudoCodigo

// Para i de 1 até 250:
//     Inicialize uma variável de saída como uma string vazia
//     Se i for múltiplo de 3, adicione 'Múltiplo de 3' à saída
//     Se i for múltiplo de 5, adicione 'Múltiplo de 5' à saída
//     Se a saída ainda estiver vazia, defina a saída como i
//     Imprima a saída
// Fim do loop

for (let i = 1; i <= 250; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Múltiplo de 3';
    if (i % 5 === 0) output += 'Múltiplo de 5';
    if (output === '') output = i;
    console.log(output);
}
