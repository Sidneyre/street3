// menu suspenso headers

let element = document.getElementById =('itens');

function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
      itens.style.display = 'block'
    }
}

// carrosel index
$(document).ready(function(){
  $('.slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true
  });
});

// previnir corrosel de travar faz ele reiniciar quando travar
$(document).ready(function(){
  $('.slick').slick();
});


// button pesquisar
// captura de elementos DOM

const content = document.querySelector('.content');
const inputsearch = document.querySelector('.divsearch input[type="search"]');

// array de endereço

let items = [
  { name: "Rio de Janeiro", link: "http://127.0.0.1:5500/rio-de-janeiro/cidade-rio.html" },
  { name: "Arraial do Cabo", link: "http://127.0.0.1:5500/rio-de-janeiro/arraial-do-cabo.html" },
  { name: "Petropolis", link: "http://127.0.0.1:5500/rio-de-janeiro/petropolis.html" },
  { name: "Campos do Jordão", link: "http://127.0.0.1:5500/sao-paulo/campos-do-jordao.html" },
  { name: "Holambra", link: "http://127.0.0.1:5500/sao-paulo/holambra.html" },
  { name: "São Roque", link: "http://127.0.0.1:5500/sao-paulo/sao-roque.html" },
  // adicionar cidade minas gerais
];

// evento add oninput faz a pesquisa funcionar com o metodo forech de cada item da pesquisa

inputsearch.oninput = () => {
  content.innerHTML = "";

  items.filter(item =>
    item.name.toLowerCase().includes(inputsearch.value.toLowerCase())
  ).forEach(item => addHTML(item));
};

// fuction adiciona endereço dentro do input search
function addHTML(item) {
  const link = document.createElement('a');
  link.href = item.link;
  link.textContent = item.name;
  link.addEventListener('click', (event) => {
    // event.preventDefault(); // Impede o redirecionamento padrão do link
    inputsearch.value = item.name;
    content.style.display = 'none';
  });
  content.appendChild(link);
}
// adciona eventlistener no content para quando click div content aparecer
inputsearch.addEventListener('click', () => {
  content.style.display = 'block';
});


document.addEventListener('click', (event) => {
  if (!inputsearch.contains(event.target) && !content.contains(event.target)) {
    content.style.display = 'none';
  }
});


