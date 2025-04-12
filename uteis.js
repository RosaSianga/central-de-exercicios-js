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

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 25, 30, 35, 36, 48, 50, 55];

    const numerosFiltrados = numeros.filter(numero => numero > 5);
    console.log("Números filtrados : " + numerosFiltrados);

}

// Básicos

// Filtrar números maiores que 10

function maiorDez() {

    const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    const maioresDez = numeros.filter(numero => numero > 10);
    console.log("Números maior que 10 : " + maioresDez);

    gerarLog("Exercício Filter 01 - Filtrar números - executado no console as " + new Date().toLocaleString());

}


// Filtrar nomes que começam com a letra 'M'

function filtroNomes() {

    const nomes = ["Ana", "Joana", "Maria", "Ricardo", "Rosa", "Mauricio", "Mariana", "Márcio"]

    const filtroNomes = nomes.filter(nome => nome.startsWith("M"));

    console.log("Nomes filtrados: " + filtroNomes);

    gerarLog("Exercício Filter 02 - Filtrar nomes - executado no console as " + new Date().toLocaleString());

}


function numMaiores() {

    const numeros = prompt("Digite uma sequencia de números");
    let filtro = prompt("Digite o número que deseja filtar");

    const array = numeros.split(",");
    let arrayValidado = [];
    let resultado = 0;

    debugger;

    for (let index = 0; index < array.length; index++) {
        resultado = array[index];

        if (!isNaN(resultado)) {
            arrayValidado.push(resultado);
        }

    }

    const maioresN = arrayValidado.filter(numero => numero > filtro);
    alert("Do filtro : " + numeros + ". Os números : " + maioresN + " são maiores que  " + filtro);

    gerarLog("Exercício Filter 03 - Filtrar números - executado no alert as " + new Date().toLocaleString());

}

//Intermediários

//Filtrar produtos com preço menor que R$ 50

function produtos() {

    let produtos = [
        { nome: "Teclado", preco: 120 },
        { nome: "Mouse", preco: 40 },
        { nome: "Fone de ouvido", preco: 80 },
        { nome: "Caderno", preco: 30 }
    ]

    const produtosBaratos = produtos.filter(produto => produto.preco < 50);

    alert(JSON.stringify(produtosBaratos));

    gerarLog("Exercício Filter 01 - Filtrar números - executado no alert as " + new Date().toLocaleString());

}


function procuraProd() {

    let produtos = [
        { id: 1, nome: "Teclado", preco: 100 },
        { id: 2, nome: "Mouse", preco: 50 },
        { id: 3, nome: "Monitor", preco: 700 }
    ]

    let produtoFiltrado = produtos.find(produto => produto.preco == 700);

    alert(JSON.stringify(produtoFiltrado));

    gerarLog("Exercicico Find 01 - Procurou o produto - executado no alert as " + new Date().toLocaleString());


}

// Básicos

//Buscar o nome “Amanda”

function procurarNome() {

    const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
    const resultado = nomes.find(nome => nome == "Amanda");
    alert(JSON.stringify(resultado));

    gerarLog("Exercicico Find 02 - Procurou o nome - executado no alert as " + new Date().toLocaleString());
}

function procurarUsuario() {

    const listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
    ];

    const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

    alert(JSON.stringify(usuarioEncontrado));

    gerarLog("Exercicico Find 01 - Procurou o usuario - executado no alert as " + new Date().toLocaleString());
}



function multiplicarNum() {

    let numeros = [1, 2, 3, 4, 5];

    let numeroDobrado = numeros.map(numero => numero * 2);

    alert(JSON.stringify(numeroDobrado));

}


//Básicos

// Adicione um sufixo às palavras
// Dado um array de palavras, use `map` para adicionar o sufixo `"!!!"` a cada uma.

function adicionarSufixo() {

    const palavras = ["olá", "mundo", "javascript"];
    const enfatizadas = palavras.map(palavra => palavra + "!!!");
    alert(JSON.stringify(enfatizadas));

}

//Adicione o prefixo “Colaborador: “ às palavras


function adicionarPrefixo() {

    const nomes = ["ana", "bruno", "carla"];
    const nomesMaiusculos = nomes.map(nome => "Colaborador " + nome);
    alert(JSON.stringify(nomesMaiusculos));

}