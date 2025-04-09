
function exemploFor() {

    for (let contador = 1; contador <= 5; contador++) {
        alert("contador : " + contador);

    }

}

function exemploWhile() {

    let contador = 1;

    while (contador <= 5) {

        alert("contador: " + contador);
        contador++;
    }

}

function exemploDoWhile() {
    let contador = 1;

    do {
        alert("contador: " + contador);
        contador++;

    } while (contador <= 5);
}

//************************************************************************************************************************************************************************* */

//Nível Básico

// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.

function exercicio01() {

    for (let num = 1; num <= 10; num++) {
        alert("Número: " + num);

    }
}

// 2. **Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.

function exercicio02() {

    let num = prompt("Digite o número que deseja saber a tabuada:");
    let valor;

    alert("Tabuada do " + num);

    for (let index = 1; index <= 10; index++) {
        valor = num * index;
        alert(num + " x " + index + " = " + valor);

    }
}


// 3. **Soma dos primeiros N números naturais:**
//     - Peça um número `N` ao usuário.
//     - Use um `while` ou `for` para somar os números de `1` a `N`.

function exercicio03() {

    let num = prompt("Digite um número");
    let contador = 0;
    let soma = 0;

    debugger;

    while (contador <= num) {

        soma = soma + contador;
        contador++;

    }

    alert("soma dos número é : " + soma)
}

//************************************************************************************************************************************************************************* */

// Nível Intermediário

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

function exercicio04() {

    let num = 1;
    let sobra = 0;

    while (num <= 50) {

        sobra = (num % 2)

        if (sobra == 0) {
            alert("Número " + num + " é par");
        }

        num++;
    }

}

// 2. **Jogo de adivinhação:**
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o correto.


function exercicio05() {

    let numGerado = Math.floor(100* Math.random() + 1);
    let numero;

    alert("Advinhe o número escolhido");

    debugger;
    
    do {

        numero = prompt("Digite o número:");

        if (numGerado < numero) {
            alert("Número escolhido é menor que o digitado. Tente novamente");

        } else if (numGerado > numero) {
            alert("Número escolhido é maior que o digitado. Tente novamente");

        } else {
            alert("Parabéns você acertou o número " + numGerado);
        }


    } while (numGerado != numero);

}

// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

function exercicio06() {

    let numero = prompt("Digite um número: ");


    while (numero >= 0) {

        alert(numero)
        numero--;
    }
}

//************************************************************************************************************************************************************************* */
// Nível Avançado

// 1. **Soma dos dígitos de um número:**
//     - Peça ao usuário um número inteiro positivo.
//     - Use um `while` para somar seus dígitos.


function exercicio07() {

    let numero = "Digite um número:"
    let soma;
    let cont = 0;

    while (cont <= numero.length) {

        soma = soma + parseInt(numero(cont));

        cont ++
        
    }


}


// 2. **Fatorial de um número:**
//     - Peça um número ao usuário.
//     - Use um `for` ou `while` para calcular o fatorial desse número.


// 3. **Inverter um número:**
//     - Peça um número ao usuário.
//     - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).


// 4. **Números perfeitos de 1 a 1000:**
//     - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//     - Exemplo: `6` → `1 + 2 + 3 = 6`.
//     - Use um `for` aninhado para encontrar e exibir esses números até `1000`.




exercicio05();