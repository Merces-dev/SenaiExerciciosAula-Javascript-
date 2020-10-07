    // Crio uma váriavel que recebe um valor quando o botão é clicado
    let btnCadastrar = document.querySelector('#btnCadastrar');

    // Adiciono um evento de click ao botao que chama a função cadastrar
    btnCadastrar.addEventListener('click', cadastrar);

    // Função que cadastra os dados
    function cadastrar(event){
    event.preventDefault();
    let nome = document.querySelector('#nome');
    let email = document.querySelector('#email');
    let telefone = document.querySelector('#telefone');

    console.log(nome.value + ' - ' + telefone.value + ' - ' + email.value)

    let dadosPessoais = {
        nome : nome.value,
        email: email.value,
        telefone: telefone.value
    }

    console.log(dadosPessoais);

    //postApi(dadosPessoais)
    console.log(JSON.stringify(dadosPessoais));



    }