//Utilizando id para buscar valor de notaum
var notaum = document.querySelector('#notaum');

//Utilizando id para buscar valor de notadois
 var notadois = document.querySelector('#notadois');

//Utilizando classe para buscar botao
var btnCalcular = document.querySelector('.btn');

//Deixando o botão interativo através do click
btnCalcular.addEventListener("click", function(event){
    //Não deixa a página carregar automaticamente
    event.preventDefault();
    var soma = (parseInt(notaum.value) + parseInt(notadois.value))
    //Converte notaum e notadois para Int e manipula seus values
    alert("O Valor da soma é " + soma);
    
})