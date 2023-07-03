function clickMenu() {
  let itens = document.getElementById('itens');
  if (itens.style.display === 'block') {
    itens.style.display = 'none';
  } else {
    itens.style.display = 'block';
  }
}


// ======   cria div dinamica =====

let meuaray = [`
<p><h2><strong>  Cidade do Rio</strong></h2></p>
<a href="/rio-de-janeiro/cidade-rio.html"><p>Cristo Redentor</li>
<p>Praia de Copacabana</p>
<p>Jardim Botânico</p></a>
`,`<p><h2><strong>  Cidade de Petropolis</strong></h2></p>
<a href="/rio-de-janeiro/petropolis.html">
<p>Museu Imperial:</p>
<p>Palácio de Cristal</p>
<p>Catedral de São Pedro de Alcântara</p>
</a> 
`,`<p><h2><strong>  Cidade Araial do Cabo</strong></h2></p>
<a href="/rio-de-janeiro/arraial-do-cabo.html">
<p>Praia do Farol</p>
<p>Praia do Forno</p>
<p>Pontal do Atalaia</p>
</a>`,];


let minhasdivs = [meuaray[0], meuaray[1], meuaray[2]];
let divs = [];  // Array para armazenar as divs criadas
let divAtual = 0;  // Índice da div atual exibida

function criarDiv(acao) {
  let container = document.getElementById("container");

  if (acao === "proximo") {
    if (divs.length < 3) {
      // Cria uma nova div
      let divNova = document.createElement("div");
      divNova.className = "minha-div";

      let conteudo = minhasdivs[divAtual];
      if (typeof conteudo === "string") {
        divNova.innerHTML = conteudo;
      } else if (typeof conteudo === "object" && conteudo instanceof HTMLElement) {
        divNova.appendChild(conteudo);
      }

      // Adiciona a nova div ao array
      divs.push(divNova);
      
      divAtual++;
    } else {
      divAtual = 0;
    }
  } else if (acao === "anterior") {
    divAtual--;

    if (divAtual < 0) {
      divAtual = divs.length - 1;
    }
  }

  // Remove todas as divs atuais do container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Adiciona a div atual ao container
  container.appendChild(divs[divAtual]);
}







