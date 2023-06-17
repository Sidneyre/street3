function clickMenu(){
    if (items.style.display == 'block') {
        items.style.display = 'none'
    }
    else {
      items.style.display = 'block'
    }
  }


  function redirecionar( ) {
    let select = document.getElementById("seletor-hero");
    let selectedOption = select.options[select.selectedIndex];
    let url = selectedOption.value;
    window.location.href = url;
  }


$(document).ready(function(){
  $('.slick').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
  });
});