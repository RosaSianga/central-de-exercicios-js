//Nível Basico


// 1. **Verificar maioridade:**
//     1. Peça ao usuário uma idade.
//     2. Use um if-else para verificar se ele é maior ou menor de idade.

let idade;
let numero;
let nota;


function verMaioridade() {

    idade = prompt("Digite a idade");

    if (idade >= 18) {
        alert("Ele é maior de idade")
    } else {
        alert("Ele é menor de idade")
    }

    gerarLog("Exercício Condicional 01 - Verificar a maioridade - executado no alert as " + new Date().toLocaleString());
}

// -------------------------------------------------------------------------------    

// 2. **Verificar se um número é positivo ou negativo:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo.

function verPositivoNegativo() {

    numero = prompt("Digite um número");

    if (numero > 0) {

        alert("Positivo.")
    } else {
        alert("Negativo.")

    }

    gerarLog("Exercício Condicional 02 - Verificar se o número positivo ou negativo - executado no alert as " + new Date().toLocaleString());

}

// 3. **Aprovação em uma prova:**
//     - O usuário insere a nota de um aluno (0 a 100).
//     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

function aprovacaoProva() {

    nota = prompt("Digite a nota o aluno (0 a 100)");

    if (nota < 0 || nota > 100) {

        alert("Nota invalida");
        nota = prompt("Digite novamente a nota entre 0 a 100");
        loopAprovacaoProva();

    } else if (nota >= 60) {

        alert("Aprovado");

    } else {
        alert("Reprovado");
    }

    gerarLog("Exercício Condicional 03 - Verificar aprovação da prova  - executado no alert as " + new Date().toLocaleString());

}

function loopAprovacaoProva() {

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

function verpPositivoNegativoZero() {

    numero = prompt("Digite um número");

    if (numero > 0) {

        alert("Positivo.")
    } else if (numero < 0) {
        alert("Negativo.")
    } else {
        alert("É zero.")
    }

    gerarLog("Exercício Condicional 04 - Verificar se o número positivo, negativo ou zero  - executado no alert as " + new Date().toLocaleString());

}


// 5. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

function classificarIdade() {

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

    gerarLog("Exercício Condicional 05 - Classifica a idade  - executado no alert as " + new Date().toLocaleString());
    
}


// 6. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.

function verParImpar() {

    let numero = prompt("Digite um número:");

    alert("O número digitado foi : " + numero);

    if (numero % 2 == 0) {
        alert("Sendo assim o número é par.");
    } else {
        alert("Sendo assim o número é ímpar.");
    }

    gerarLog("Exercício Condicional 06 - Verificar se o número é Impar ou Par - executado no alert as " + new Date().toLocaleString());

}

//*************************************************************************************************************************************************************** */

//  Nível Intermediário

let num1;
let num2;
let num3;

// 1. **Calculadora simples:**
//     - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//     - Use um `if-else` para calcular o resultado e exibi-lo.

function calculadora() {


    num1 = prompt("Digite 1ª número:");
    num2 = prompt("Digite 2º número:");
    let operador = prompt("Digite o operador aritmético entre `+`, `-`, `*`, `/`");
    let valor;

    if (operador == "+") {
        valor = Number(num1) + Number(num2)
    } else if (operador == "-") {
        valor = Number(num1) - Number(num2)
    } else if (operador == "*") {
        valor = Number(num1) * Number(num2)
    } else if (operador == "/") {
        valor = Number(num1) / Number(num2)
    }

    alert("Valores digitados foram : " + num1 + operador + num2 + " : Resultado da operaçãao : " + valor);

    gerarLog("Exercício Condicional 07 - Calculadora - executado no alert as " + new Date().toLocaleString());
}


// 2. **Maior entre três números:**
//     - O usuário insere três números.
//     - Use `if-else` para determinar e exibir o maior.

function verNumMaior() {

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

    gerarLog("Exercício Condicional 08 - Verificar o maior número - executado no alert as " + new Date().toLocaleString());

}


// 3. **Desconto em compras:**
//     - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//     - Caso contrário, exiba o valor normal.

function descontoCompra() {

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

    gerarLog("Exercício Condicional 09 - Aplicar o desconto em compra  - executado no alert as " + new Date().toLocaleString());

}


// 4. **Sistema de login simples:**
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

function login() {

    debugger;

    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario == "admin" && senha == "1234") {
        alert("Login bem-sucedido")
    } else {
        alert("Acesso Negado")
    }

    gerarLog("Exercício Condicional 10 - Validação de Login- executado no alert as " + new Date().toLocaleString());

}

//*************************************************************************************************************************************************************** */

//Nível Avançado

// 1. **Classificação de triângulos:**
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.

// equilaterio - 3 lados iguais
// isoceles - 2 lados iguais e 1 diferente
// escaleno - 3 lados diferentes

function classificarTriangulo() {

    let ladoA = prompt("Insira o Lado A: ");
    let ladoB = prompt("Insira o Lado B: ");
    let ladoC = prompt("Insira o Lado C: ");

    if (ladoA == ladoB && ladoA == ladoC) {
        alert("É um Triângulo Equilátero");
    } else if ((ladoA == ladoB && ladoA != ladoC) || (ladoB == ladoC && ladoB != ladoA) || (ladoA == ladoC && ladoA != ladoB)) {
        alert("É um Triângulo Isósceles");
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        alert("É um Triângulo Escaleno");
    }

    gerarLog("Exercício Condicional 11 - Classificação do Triângulo - executado no alert as " + new Date().toLocaleString());

}

// 2. **Conversão de notas para conceitos:**
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).


function classificarNotas() {

    nota = prompt("Digite uma nota entre 0 e 100");

    if (nota >= 90 && nota <= 100) {
        alert("Nota final A");
    } else if (nota >= 80 && nota <= 89) {
        alert("Nota final B");
    } else if (nota >= 70 && nota <= 79) {
        alert("Nota final C");
    } else if (nota >= 60 && nota <= 69) {
        alert("Nota final D");
    } else if (nota < 60) {
        alert("Nota final F");
    } else {
        alert("Nota inválida - superior a 100");
    }

    gerarLog("Exercício Condicional 12 - Classificar notas - executado no alert as " + new Date().toLocaleString());

}

// 3. **Cálculo de IMC:**
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.


function calculoIMC() {

    let peso = prompt("Digite o peso: ");
    let altura = prompt("digite a altura: ")
    let pct;

    pct = (peso / (altura * altura));
    pct = parseFloat(pct).toFixed(2);

    if (pct < 18.5) {
        alert("IMC = " + pct + " - Abaixo do peso");
    } else if (pct >= 18.5 && pct < 24.9) {
        alert("IMC = " + pct + " - Peso normal");
    } else if (pct >= 25 && pct <= 29.9) {
        alert("IMC = " + pct + " - Sobrepeso");
    } else {
        alert("IMC = " + pct + " - Obesidade");
    }

    gerarLog("Exercício Condicional 13 - Calcular o IMC - executado no alert as " + new Date().toLocaleString());

}

// 4. **Validação de ano bissexto:**
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.


function anoBissexto() {

    let ano = prompt("Digite o ano");

    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        alert("Ano " + ano + " é bissexto");

    } else {
        alert("Ano " + ano + " não é bissexto");
    }

    gerarLog("Exercício Condicional 14 - Verificar o ano Bissexto - executado no alert as " + new Date().toLocaleString());

}


