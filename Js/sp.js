function clickMenu() {
    let itens = document.getElementById('itens');
    if (itens.style.display === 'block') {
      itens.style.display = 'none';
    } else {
      itens.style.display = 'block';
    }
  }
  
  
  // ======   cria div dinamica =====
  
  let meuaray = [`<a href="/sao-paulo/campos-do-jordao.html"><p><h2><strong>Campos do Jordão</strong></h2></p>
  <p>Morro do Elefante</li>
  <p>Palácio Boa Vista</p>
  <p>Parque Amantikir</p></a>
  `,`
  <a href="/sao-paulo/holambra.html"><p><h2><strong>Holambra</strong></h2></p>
  <p>Expoflora</p>
  <p>Moinho dos Povos Unidos</p>
  <p>Deck do Amor</p>
  </a> 
  `,`<a href="/sao-paulo/sao-roque.html"><p><h2><strong>São Roque</strong></h2></p>
  <p>Vinícolas</p>
  <p>Ski Mountain Park</p>
  <p>Catarina Fashion Outlet</p>
  </a>`,];
  
  
  let minhasdivs = [meuaray[0], meuaray[1], meuaray[2]];
  let divs = [];  // Array para armazenar as divs criadas
  let divAtual = 0;  // Índice da div atual exibida
  
  function criarDiv(acao) {
    var container = document.getElementById("container");
  
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
  
  
  
  
  
  
  
  