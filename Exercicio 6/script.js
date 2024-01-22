//Exercicio 6

// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

//PseudoCodigo

// Para i de 30 até 1 faça:
//     Defina primo como verdadeiro
//     Para j de 2 até i faça:
//         Se i é divisível por j então:
//             Defina primo como falso
//             Pare o loop
//     Se primo é verdadeiro e i é maior que 1 então:
//         Imprima "[" + i + "]"
//     Senão:
//         Imprima i


for(let i = 30; i >= 1; i--){
    let primo = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            primo = false;
            break;
        }
    }
    if(primo && i > 1){
        console.log("[" + i + "]");
    }else{
        console.log(i);
    }
}
