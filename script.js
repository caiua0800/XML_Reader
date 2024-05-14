const firebaseConfig = {
    apiKey: "AIzaSyBR-PfOJz1t2fNAxvs8EGopu9L0U6BrIgY",
    authDomain: "corrida-9e963.firebaseapp.com",
    databaseURL: "https://corrida-9e963-default-rtdb.firebaseio.com",
    projectId: "corrida-9e963",
    storageBucket: "corrida-9e963.appspot.com",
    messagingSenderId: "879186080823",
    appId: "1:879186080823:web:013e6e16678a0c1bb6fbb2",
    measurementId: "G-ZG5PVY874W"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const BASE = "camp";

let pastaNome;
let arquivoNome;

let mostrarDifference = true;
let adicional4 = false


let telaADireitaBtn = document.getElementById('telaADireitaBtn')
let telaAEsquerdaBtn = document.getElementById('telaAEsquerdaBtn')

let DIVONA = document.getElementById('DIVONA')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.getElementById('div4')
let div5 = document.getElementById('div5')
let div6 = document.getElementById('div6')
let div7 = document.getElementById('div7')
let div8 = document.getElementById('div8')


telaADireitaBtn.addEventListener('click', () => {
    DIVONA.classList.remove('conteudo')
    DIVONA.classList.add('conteudo2')

    div1.classList.remove('div1')
    div1.classList.add('div12')

    div2.classList.remove('div1')
    div2.classList.add('div22')

    div3.classList.remove('div1')
    div3.classList.add('div32')

    div4.classList.remove('div1')
    div4.classList.add('div42')

    div5.classList.remove('div1')
    div5.classList.add('div52')

    div6.classList.remove('div1')
    div6.classList.add('div62')

    div7.classList.remove('div1')
    div7.classList.add('div72')

    div8.classList.remove('div8')
    div8.classList.add('div82')

    telaAEsquerdaBtn.classList.remove('d-none')
    telaADireitaBtn.classList.add('d-none')

})

telaAEsquerdaBtn.addEventListener('click', () => {
    DIVONA.classList.add('conteudo')
    DIVONA.classList.remove('conteudo2')

    div1.classList.add('div1')
    div1.classList.remove('div12')

    div2.classList.add('div1')
    div2.classList.remove('div22')

    div3.classList.add('div1')
    div3.classList.remove('div32')

    div4.classList.add('div1')
    div4.classList.remove('div42')

    div5.classList.add('div1')
    div5.classList.remove('div52')

    div6.classList.add('div1')
    div6.classList.remove('div62')

    div7.classList.add('div1')
    div7.classList.remove('div72')

    div8.classList.add('div8')
    div8.classList.remove('div82')

    telaAEsquerdaBtn.classList.add('d-none')
    telaADireitaBtn.classList.remove('d-none')

})


document.getElementById('fontSelect').addEventListener('change', function() {
    var selectedFont = this.value;
    document.body.style.fontFamily = selectedFont;
});


let adicional4Btn = document.getElementById('adicional4')
let Naoadicional4 = document.getElementById('Naoadicional4')

adicional4Btn.addEventListener('click', () => {
    Naoadicional4.classList.remove('d-none')
    adicional4Btn.classList.add('d-none')
    adicional4 = true
})

Naoadicional4.addEventListener('click', () => {
    Naoadicional4.classList.add('d-none')
    adicional4Btn.classList.remove('d-none')
    adicional4 = false
})

function toggleDifference() {
    const rows = document.querySelectorAll('[data-position]');
    rows.forEach(row => {
        const differenceCell = row.querySelector('td:nth-child(4)'); // Coluna 'Difference' é a quarta coluna (índice 3)
        if (differenceCell) { // Verifica se a célula 'differenceCell' não é nula
            if (mostrarDifference) {
                differenceCell.classList.add('d-none'); // Oculta a coluna 'Difference' se não for nula
            } else {
                differenceCell.classList.remove('d-none'); // Mostra a coluna 'Difference' se não for nula
            }
        }
    });

    // Alterna o texto do botão entre "Ocultar Difference" e "Mostrar Difference"
    const toggleBtn = document.getElementById('toggleDifferenceBtn');
    toggleBtn.textContent = mostrarDifference ? 'Mostrar Difference' : 'Ocultar Difference';

    // Alterna o estado da variável mostrarDifference
    mostrarDifference = !mostrarDifference;
}

// Adiciona um evento de clique ao botão para chamar a função toggleDifference
document.getElementById('toggleDifferenceBtn').addEventListener('click', () => {
    toggleDifference(); // Chama a função apenas quando o botão for clicado
});

document.addEventListener('DOMContentLoaded', () => {
    db.collection(BASE).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let a = doc.data();
            document.getElementById('inputNomePastaREAL').value = a.pasta.toString();
            document.getElementById('inputNomeArq').value = a.arquivo.toString();
            pastaNome = a.pasta.toString();
            arquivoNome = a.arquivo.toString();
        });
    });


});

document.getElementById('submitButtonId').addEventListener('click', () => {
    db.collection(BASE).doc('caminho').update({
        pasta: document.getElementById('inputNomePastaREAL').value,
        arquivo: document.getElementById('inputNomeArq').value
    }).then(() => {
        console.log('Registro atualizado com sucesso');
    }).catch(error => {
        console.log('Erro: ' + error);
    });
});

let inputNomePastaREAL = document.getElementById('inputNomePastaREAL');
let inputNomeArq = document.getElementById('inputNomeArq');

let classe = false;

document.getElementById('adicionarClasse').addEventListener('click', () => {
    classe = true; // Defina a variável 'classe' como true quando o botão for clicado
    document.getElementById('adicionarClasse').classList.add('d-none');
    document.getElementById('removerClasse').classList.remove('d-none');
});

document.getElementById('removerClasse').addEventListener('click', () => {
    classe = false; // Defina a variável 'classe' como true quando o botão for clicado
    document.getElementById('adicionarClasse').classList.remove('d-none');
    document.getElementById('removerClasse').classList.add('d-none');
});

function definirCorLinha(rowMostrar, corSelecionada) {
    rowMostrar.classList.remove('text-light', 'text-white', 'text-black', 'text-warning', 'text-success', 'text-primary', 'text-danger');

    if (corSelecionada === 'Preto')
        rowMostrar.classList.add('text-black');
    else if (corSelecionada === 'Branco')
        rowMostrar.classList.add('text-light');
    else if (corSelecionada === 'Vermelho')
        rowMostrar.classList.add('text-danger');
    else if (corSelecionada === 'Amarelo')
        rowMostrar.classList.add('text-warning');
    else if (corSelecionada === 'Verde')
        rowMostrar.classList.add('text-success');
    else if (corSelecionada === 'Azul')
        rowMostrar.classList.add('text-primary');
}

// setInterval(lerArquivo, 500);
function lerArquivo() {

    let alturaLinha = document.getElementById('alturaLinha')
    let tabela = document.getElementById('mostrar')

    tabela.style.lineHeight = alturaLinha.value

    const url = `http://localhost:3000/ler-arquivo?DIRETORIO=${pastaNome}&ARQUIVO=${arquivoNome}`;
    fetch(url)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const results = xmlDoc.getElementsByTagName('result');

        const mostrarDiv = document.getElementById('mostrar');

        const bestLaptimes = xmlDoc.querySelectorAll('label[type="bestlaptime"]');


        let  bestLapTime1

        bestLaptimes.forEach(label => {
            // Obter o valor do bestlaptime
            const bestLaptime = label.textContent.trim(); // Trim remove espaços em branco extras
            bestLapTime1 = bestLaptime
        });

        // Criar tabela para a div 'mostrar' apenas com as colunas necessárias
        const tableMostrar = document.createElement('table');
        tableMostrar.classList.add('table');
        tableMostrar.classList.add('table-striped');
        tableMostrar.style.overflowX = 'auto';
        tableMostrar.style.textAlign = 'center'; // Centralizar o texto na tabela

        const theadMostrar = document.createElement('thead');
        const headerRowMostrar = document.createElement('tr');
        const headersMostrar = [' ', ' ', ' '];
        headersMostrar.forEach(headerText => {

            const th = document.createElement('th');
            th.textContent = headerText;
            th.style.maxWidth = '200px'; // Definir largura máxima para 200px
            th.style.overflow = 'hidden'; // Ocultar texto extra
            th.style.textOverflow = 'ellipsis'; // Exibir reticências (...) para indicar texto cortado
            th.style.padding = '10px'; // Adicionar espaço entre as colunas
            headerRowMostrar.appendChild(th);
            th.classList.add('bg-success');

        });
        theadMostrar.appendChild(headerRowMostrar);
        tableMostrar.appendChild(theadMostrar);

        // Ordenar os resultados com base no atributo 'position'
        const sortedResults = Array.from(results).sort((a, b) => {
            return parseInt(a.getAttribute('position')) - parseInt(b.getAttribute('position'));
        });

        sortedResults.forEach((result, index) => {
            // Movendo a declaração da variável 'rowMostrar' para o início do loop
            const rowMostrar = document.createElement('tr');


            rowMostrar.setAttribute('data-position', result.getAttribute('position')); // Adicionar atributo de posição
            
            rowMostrar.addEventListener('click', () => {
                let corAplicar = document.getElementById('selectCor').value;
                definirCorLinha(rowMostrar, corAplicar);
            });
            

            // Logo após criar a linha dentro do loop forEach
            definirCorLinha(rowMostrar, document.getElementById('selectCor').value);
            

            // Criar célula para o número da posição
            const cellNumero = document.createElement('td');
            cellNumero.textContent = result.getAttribute('position');
            cellNumero.style.textAlign = 'center'; // Centralizar o texto na célula
            rowMostrar.appendChild(cellNumero);

            const no = document.createElement('td');
            no.textContent = result.getAttribute('no');
            no.style.minWidth = '50px'; // Defina a largura mínima da célula
            no.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
            no.style.textAlign = 'center'; // Centralizar o texto na célula
            rowMostrar.appendChild(no);
            
            if(!adicional4){
                // Criar célula para o nome
                const cellNome = document.createElement('td');
                cellNome.textContent = result.getAttribute('additional2'); // Substitua 'Nome' pelo nome do atributo real
                cellNome.style.textAlign = 'start'; // Centralizar o texto na célula
                cellNome.style.minWidth = '160px'; // Defina a largura
                // mínima da célula
                cellNome.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
                rowMostrar.appendChild(cellNome);
            }else{
                // Criar célula para o nome
                const cellNome = document.createElement('td');
                cellNome.textContent = result.getAttribute('additional4'); // Substitua 'Nome' pelo nome do atributo real
                cellNome.style.textAlign = 'start'; // Centralizar o texto na célula
                cellNome.style.minWidth = '160px'; // Defina a largura
                // mínima da célula
                cellNome.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
                rowMostrar.appendChild(cellNome);  
            }
            
        
            if (classe) {
                const cellClasse = document.createElement('td');
                cellClasse.textContent = result.getAttribute('class') || '-'; // Exibe '-' se o atributo 'class' estiver vazio
                cellClasse.style.textAlign = 'center';
                cellClasse.style.minWidth = '100px'; // Defina a largura mínima da célula
                cellClasse.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
                rowMostrar.appendChild(cellClasse);
            }
            
            // Verificar se é o primeiro colocado
            if (index === 0) {
                // Se for o primeiro colocado, criar célula para a melhor velocidade
                const cellVelocidade = document.createElement('td');
                cellVelocidade.textContent = bestLapTime1; // Substitua 'MelhorVelocidade' pelo nome do atributo real
                cellVelocidade.style.textAlign = 'start'; // Centralizar o texto na célula
                cellVelocidade.style.minWidth = '100px'; // Defina a largura mínima da célula
                cellVelocidade.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
                rowMostrar.appendChild(cellVelocidade);
            } else {
                // Se não for o primeiro colocado, criar célula para a diferença
                if(mostrarDifference){
                    const cellDiferenca = document.createElement('td');
                    cellDiferenca.textContent = result.getAttribute('difference'); // Substitua 'Diferença' pelo nome do atributo real
                    cellDiferenca.style.textAlign = 'start'; // Centralizar o texto na célula
                    cellDiferenca.style.minWidth = '100px'; // Defina a largura mínima da célula
                    cellDiferenca.style.whiteSpace = 'nowrap'; // Impedir que o texto quebre para a próxima linha
                    rowMostrar.appendChild(cellDiferenca);
                }

            }

            // rowMostrar.classList.add('border')
            // rowMostrar.classList.add('border-top-0')
            // rowMostrar.classList.add('border-start-0')
            // rowMostrar.classList.add('border-end-0')
            // rowMostrar.classList.add('border-2')
            rowMostrar.classList.add('bo')  
        
            tableMostrar.appendChild(rowMostrar);
        });
        
        // Remover a tabela existente e adicionar a nova tabela
        mostrarDiv.innerHTML = '';
        mostrarDiv.appendChild(tableMostrar);
    });
}


setInterval(lerArquivo, 500);


const opcoesCor = document.querySelectorAll('.dropdown-item');
    
// Função para mudar a cor do texto dentro da div "dados"
function mudarCorTexto(cor) {
    // Remove todas as classes de cor da div
    document.getElementById('mostrar').classList.remove('texto-preto', 'texto-branco', 'texto-amarelo', 'texto-azul', 'texto-vermelho');
    // Adiciona a classe correspondente à cor selecionada
    document.getElementById('mostrar').classList.add(cor);
}

// Adiciona um evento de clique para cada opção de cor
opcoesCor.forEach(opcao => {
    opcao.addEventListener('click', () => {
        const corSelecionada = opcao.textContent.toLowerCase(); // Converte o texto da opção para minúsculas
        mudarCorTexto(`texto-${corSelecionada}`); // Chama a função mudarCorTexto com a classe CSS correspondente
    });
});

var linhas = [];

for(let i = 0; i < 100; i++){
    linhas[i] = false;
}

function alterarGrossura() {
    // Obtém o valor selecionado no select grossuraLinha
    let selectedValue = document.getElementById('grossuraLinha').value;
    // Aplica o valor selecionado como grossura da linha
    document.getElementById('mostrar').style.fontWeight = selectedValue;
}

function alterarTamanhoLetra() {
    // Obtém o valor selecionado no select tamanhoLetra
    let selectedValue = document.getElementById('tamanhoLetra').value;
    // Aplica o valor selecionado como tamanho da letra
    document.getElementById('mostrar').style.fontSize = selectedValue;
}
