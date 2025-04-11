function gerarLog(textoDoLog) {
    //document = é a pagina (site)
    //querySelector = Chama um elemento da tela - tag no html
    let container = document.querySelector(".logs-container"); // Procura a classe logs-container na tela
    let paragrafo = document.createElement("p"); // Cria um elemento (paragrafo) na tela. ex: tag p

    paragrafo.innerHTML = textoDoLog; // coloca o conteudo no paragrafo

    container.appendChild(paragrafo); // Adiciona o paragrafo dentro da classe 
}

//**************************************************************************************

function exemploFilter() {

    let  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numero => numero > 2);
    alert(numerosFiltrados);

}


