

     let qtdMaca = document.querySelector('#quantidademaca');
     let btnCalcular = document.querySelector('#btnCalcular');

     btnCalcular.addEventListener('click', function(event){
         event.preventDefault();
         if(parseInt(qtdMaca.value) >12){
            alert("O valor de "+ parseInt(qtdMaca.value) +" maçãs é "+parseInt(qtdMaca.value) * parseFloat('0.3'));
         }else{
            alert("O valor de "+ parseInt(qtdMaca.value) +" maçãs é "+parseInt(qtdMaca.value) * parseFloat('0.5'));
         }
     })
     //let - O valor pode ser alterado depois
     //const - O valor não pode ser alterado depois
