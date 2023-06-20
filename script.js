let element = document.getElementById =('itens');

function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
      itens.style.display = 'block'
    }
}


// function redirecionar() {
//   var selectElement = document.getElementById('seletor-hero');
//   var selectedValue = selectElement.value;
//   window.location.href = selectedValue;
// }

$(document).ready(function(){
  $('.slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
  });
});


$(document).ready(function(){
  $('.slick').slick();
});
