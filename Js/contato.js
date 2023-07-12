// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
// -- captura senha----///
let senhaInput = document.getElementById('senha')
let IdSenhaHelper = document.getElementById('senha-helper')




// Mostrar popup de campo obrigatório


 function mostrar_poupup(input,label){
    input.addEventListener("focus",function(){
    label.classList.add("required-popup")

    input.addEventListener("blur",function(){
    label.classList.remove("required-popup")
    })

})}

mostrar_poupup(usernameInput, usernameLabel)


// Verifica se usuario tem min de 3 letras do valor digitado
usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value;

    if (valor.length < 3){
        //Estilos dinamicos caso o valor nao seja valido
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error')
        usernameHelper.innerText = "username deve conter o valor maior que 3 caracteres"
        usernameHelper.classList.add('visible')
    }else {
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
    }

    return true
})

senhaInput.addEventListener('change', function (e){
    let valor = e.target.value;

    if (valor.length < 3){
        //estilos
        senhaInput.classList.remove('correct')
        senhaInput.classList.add('error')
        IdSenhaHelper.innerText = "senha deve ser maior que 3 caracteres"
        IdSenhaHelper.classList.add('visible')
    } else {
        senhaInput.classList.remove('error')
        IdSenhaHelper.classList.remove('visible')
        senhaInput.classList.add('correct')
    }

    return true
})

// validar campo confirma confirma senha

let confirmaSenhaInput=document.getElementById('confirma-senha')
let confirmaSenhaLabel=document.querySelector('label[for="confirma-senha"')
let confirmaSenhaHelper=document.getElementById("confirma-senha-helper")

mostrar_poupup(confirmaSenhaLabel,confirmaSenhaHelper)
confirmaSenhaInput.addEventListener("change", function(evento){
    let valor = evento.target.value;
    let senha = senhaInput.value;

    if (valor == senha){
        confirmaSenhaInput.classList.remove("error");
        confirmaSenhaInput.classList.add('correct');
        confirmaSenhaHelper.classList.remove('visible')
    }else {
        confirmaSenhaInput.classList.remove('correct');
        confirmaSenhaInput.classList.add('error');
        confirmaSenhaHelper.innerText = 'Senhas diferentes'
        confirmaSenhaHelper.classList.add('visible')
    }
    return true
});


// validar email //

let emailInput =document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelperText = document.getElementById('email-helper')

mostrar_poupup(emailInput,emailLabel);

emailInput.addEventListener("change", function teste(evento){
    let valor = evento.target.value;

    if (valor.includes("@") && valor.includes(".com")){
        //estilos
        emailInput.classList.remove('correct')
        emailHelperText.classList.remove('visible')
        emailInput.classList.add('correct')
    } else {
        emailInput.classList.remove('correct')
        emailInput.classList.add('error')
        emailHelperText.innerText = 'Email invalido'
        emailHelperText.classList.add('visible')
    }

    return true
});

// let teste123 = teste();

// console.log(teste123)

// let btnCadastro = document.querySelector('#btnCadastro')

// btnCadastro.addEventListener('click', function(evento){
//     let valor = emailInput.target.value
//     if (valor == true){
    
//      } else {
//         evento.preventDefault();
//     alert('OI');
//     }
// }
// );

// let emailInput = document.querySelector('#emailInput');
// let emailHelperText = document.querySelector('#emailHelperText');
// let btnCadastro = document.querySelector('#btnCadastro');

// emailInput.addEventListener("change", function(evento) {
//     let valor = evento.target.value;

//     if (valor.includes("@") && valor.includes(".com")) {
//         // Estilos para email válido
//         emailInput.classList.remove('error');
//         emailHelperText.classList.remove('visible');
//         emailInput.classList.add('correct');
//     } else {
//         // Estilos para email inválido
//         emailInput.classList.remove('correct');
//         emailInput.classList.add('error');
//         emailHelperText.innerText = 'Email inválido';
//         emailHelperText.classList.add('visible');
//     }
// });

btnCadastro.addEventListener('click', function(evento) {
    let valor = emailInput.value;
    let valor1 = usernameInput.value;
    let valor2 = senhaInput.value;

    if (valor === '' || valor1 === '' || valor2 === '') {
        // enviar para servidor
        
        alert('Algum campo está vazio ou prenchido incorretamente. Preencha-o antes de prosseguir.')
    } else {
        evento.preventDefault();
        alert('Cadastro realizado com sucesso');
    }
});



// // menu suspenso headers

// let element = document.getElementById =('itens');

function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
      itens.style.display = 'block'
    }
}
