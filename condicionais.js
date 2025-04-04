//Nível Basico

// 1. **Verificar maioridade:**
//     1. Peça ao usuário uma idade.
//     2. Use um if-else para verificar se ele é maior ou menor de idade.

// let idade = prompt("Digite a idade");

// if (idade >= 18) {
//     console.log("Ele é maior de idade")
// }  else {
//     console.log("Ele é menor de idade")
// }


// -------------------------------------------------------------------------------
// 2. **Verificar se um número é positivo, negativo ou zero:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// let num = prompt("Digite um número");

// if (num > 0) {

//     console.log("Positivo.")
// } else {
//     if (num < 0) {
//         console.log("Negativo.")
//     } else {
//         console.log("É zero.")
//     }
// }

// -------------------------------------------------------------------------------

// 3. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.

// let num = prompt("Digite um número:");

// console.log("O número digitado foi : "  + num);

// if (num % 2 == 0) {
//     console.log("Sendo assim o número é par.");
//   } else {
//     console.log("Sendo assim o número é ímpar.");
//   }


// -------------------------------------------------------------------------------

// 4. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

let idade = prompt("Digite a idade");

if (idade < 0 ){
    console.log("Idade inválida");
} else if (idade >= 0 && idade <= 12) {
    console.log("Criança")
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente")
} else if (idade >=18 ) {
    console.log("Adulto")
}

