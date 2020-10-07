let temperatura = document.querySelector('#temperatura');
let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let btnConverter = document.querySelector('#btnConverter');

btnConverter.addEventListener('click', converter);

function converter(event) {
    event.preventDefault();

    if(!celsius.checked && !fahrenheit.checked){
        alert('Informe o tipo de conversão');
    } else if(celsius.checked){
        alert(((temperatura.value - 32) * 5) / 9);
    } else{
        alert(((temperatura.value * 9) / 5) + 32);
    }
}