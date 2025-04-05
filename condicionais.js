//Nível Basico


// 1. **Verificar maioridade:**
//     1. Peça ao usuário uma idade.
//     2. Use um if-else para verificar se ele é maior ou menor de idade.

let idade;
let numero;
let nota;


function execicio01() {

    idade = prompt("Digite a idade");

    if (idade >= 18) {
        alert("Ele é maior de idade")
    } else {
        alert("Ele é menor de idade")
    }

}

// -------------------------------------------------------------------------------    

// 2. **Verificar se um número é positivo ou negativo:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo.

function exercicio02() {

    numero = prompt("Digite um número");

    if (numero > 0) {

        alert("Positivo.")
    } else {
        alert("Negativo.")

    }
}

// 3. **Aprovação em uma prova:**
//     - O usuário insere a nota de um aluno (0 a 100).
//     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

function exercicio03() {

    nota = prompt("Digite a nota o aluno (0 a 100)");

    if (nota < 0 || nota > 100) {

        alert("Nota invalida");
        nota = prompt("Digite novamente a nota entre 0 a 100");
        exercicio03A();

    } else if (nota >= 60) {

        alert("Aprovado");

    } else {
        alert("Reprovado");
    }

}

function exercicio03A() {

    if (nota < 0 || nota > 100) {

        alert("Nota invalida");
        nota = prompt("Digite novamente a nota entre 0 a 100");
        exercicio03A();

    } else if (nota >= 60) {

        alert("Aprovado");

    } else {
        alert("Reprovado");
    }

}

// 4. **Verificar se um número é positivo, negativo ou zero:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

function execicio04() {

    numero = prompt("Digite um número");

    if (numero > 0) {

        alert("Positivo.")
    } else if (numero < 0) {
        alert("Negativo.")
    } else {
        alert("É zero.")
    }
}


// 5. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

function exercicio05() {

    idade = prompt("Digite a idade");

    if (idade < 0) {
        alert("Idade inválida");
    } else if (idade >= 0 && idade <= 12) {
        alert("Criança")
    } else if (idade >= 13 && idade <= 17) {
        alert("Adolescente")
    } else if (idade >= 18) {
        alert("Adulto")
    }

}


// 6. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.

function exercicio06() {

    let numero = prompt("Digite um número:");

    alert("O número digitado foi : " + numero);

    if (numero % 2 == 0) {
        alert("Sendo assim o número é par.");
    } else {
        alert("Sendo assim o número é ímpar.");
    }

}

//*************************************************************************************************************************************************************** */

//  Nível Intermediário

let num1;
let num2;
let num3;

// 1. **Calculadora simples:**
//     - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//     - Use um `if-else` para calcular o resultado e exibi-lo.

function exercicio07() {


    num1 = prompt("Digite 1ª número:");
    num2 = prompt("Digite 2º número:");
    let operador = prompt("Digite o operador aritmético entre `+`, `-`, `*`, `/`");
    let valor;

    if (operador == "+") {
        valor = Number(num1) + Number(num2)
        alert("Valores digitados foram : " + num1 + operador + num2 + " : Resultado da operaçãao : " + valor);
    } else if (operador == "-") {
        valor = Number(num1) - Number(num2)
        alert("Valores digitados foram : " + num1 + operador + num2 + " : Resultado da operaçãao : " + valor);
    } else if (operador == "*") {
        valor = Number(num1) * Number(num2)
        alert("Valores digitados foram : " + num1 + operador + num2 + " : Resultado da operaçãao : " + valor);
    } else if (operador == "/") {
        valor = Number(num1) / Number(num2)
        alert("Valores digitados foram : " + num1 + operador + num2 + " : Resultado da operaçãao : " + valor);

    }

}


// 2. **Maior entre três números:**
//     - O usuário insere três números.
//     - Use `if-else` para determinar e exibir o maior.

function exercicio08() {

    let maiorNum;

    num1 = prompt("Digite 1ª número:");
    num2 = prompt("Digite 2º número:");
    num3 = prompt("Digite 3ª número:");


    if (num1 > num2 && num1 > num3) {
        maiorNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        maiorNum = num2;
    } else if (num3 > num1 && num3 > num2) {
        maiorNum = num3;
    }

    alert("Maior número digitado foi : " + maiorNum);

}


// 3. **Desconto em compras:**
//     - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//     - Caso contrário, exiba o valor normal.

function exercicio09() {

    debugger;

    let valor = prompt("Qual o valor da compra? ")
    let desconto = 0;
    let valorFinal = 0;


    if (valor > 100) {
        desconto = ((Number(valor) * 10) / 100);
        valorFinal = valor - desconto;
        alert("Desconto de 10% aplicado, valor total da compra é " + valorFinal);
    } else {
        valorFinal = valor
        alert("Valor total da compra é " + valorFinal);
    }
}


// 4. **Sistema de login simples:**
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

function exercicio10() {

    debugger;

    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario == "admin" && senha == "1234") {
        alert("Login bem-sucedido")
    } else {
        alert("Acesso Negado")
    }


}

//*************************************************************************************************************************************************************** */

//Nível Avançado

// 1. **Classificação de triângulos:**
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.

// equilaterio - 3 lados iguais
// isoceles - 2 lados iguais e 1 diferente
// escaleno - 3 lados diferentes

function exercicio11(){

    let ladoA = prompt("Insira o Lado A: ");
    let ladoB = prompt("Insira o Lado B: ");
    let ladoC = prompt("Insira o Lado C: ");

    if (ladoA == ladoB && ladoA == ladoC) {
        alert("É um Triângulo Equilátero");
   } else if (ladoA == ladoB && ladoA != ladoC){
    alert("É um Triângulo Equilátero");

   }


}


// 2. **Conversão de notas para conceitos:**
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// 3. **Cálculo de IMC:**
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.


// 4. **Validação de ano bissexto:**
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.


exercicio10();