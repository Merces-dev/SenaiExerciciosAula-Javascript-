let email = document.querySelector('#newsInputEmail');
let btnEnviar = document.querySelector('#news__button');

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();

    if(email.value.includes('@') === true){
        alert('Email cadastrado')
    } else {
        alert('Email inválido');
    }
})