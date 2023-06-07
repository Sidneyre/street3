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