
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

//Nível Básico

// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.
 
function exercicio01 () {

    for (let num = 1; num <= 10; num++) {
        alert ("Número: " + num);
        
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
    let soma;

    while (contador <= num) {

        contador ++;
                
    }

    alert("soma dos número é : " + contador)
}

  

exercicio02();