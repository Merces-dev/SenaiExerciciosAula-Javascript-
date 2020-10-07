let contatos = [{
    nome: 'Fernando',
    email: 'fernando.guerra@sp.senai.br',
    telefone: '11972084334'
}]
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');

//Crio um objeto a partir do elemento no documento
let btnCadastrar = document.querySelector('#btnCadastrar');
//Adiciono um evento de click ao botao chamando a função cadastrar
btnCadastrar.addEventListener('click', cadastrar);



let btnRemover = document.querySelector('#btnRemover');
btnRemover.addEventListener('click', remover);

function limparCampos() {
    nome.value = "";
    email.value = "";
    telefone.value = "";

    //Focus leva o usuário diretamente ao input(nesse caso)
    nome.focus();
}

function listar() {
    let corpoTabela = document.querySelector('#tabela-lista-corpo'); //<tbody></tbody>

    corpoTabela.innerHTML = "";

    let linha, colunaNome, colunaEmail, colunaTelefone;


    contatos.forEach(item => {
        linha = document.createElement('tr'); //<tr></tr>

        //NOME
        colunaNome = document.createElement('td'); //<td></td>
        colunaNome.innerText = item.nome; //<td>Fernando</td>
        linha.appendChild(colunaNome); //<tr><td>Fernando</td></tr>

        //EMAIL
        colunaEmail = document.createElement('td'); //<td></td>
        colunaEmail.innerText = item.email; //<td>fernando.guerra@sp.senai.br</td>
        linha.appendChild(colunaEmail); //<tr><td>Fernando</td><td>fernando.guerra@sp.senai.br</td></tr>

        //TELEFONE
        colunaTelefone = document.createElement('td'); //<td></td>
        colunaTelefone.innerText = item.telefone; //<td>11972084334</td>
        linha.appendChild(colunaTelefone); //<tr><td>Fernando</td><td>fernando.guerra@sp.senai.br</td><td>11972084334</td></tr>

        corpoTabela.appendChild(linha); //<tbody><tr><td>Fernando</td><td>fernando.guerra@sp.senai.br</td><td>11972084334</td></tr></tbody>
    });
    limparCampos();
}

function cadastrar(event) {
    event.preventDefault();
    try {


        let contato = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        }
        contatos.push(contato);

        alert('Contato Cadastrado');
        listar();
    } catch (error) {
        alert('Ocorreu um erro, entre em contato com Merces-dev');
    }
}

function remover(event) {
    event.preventDefault();

     //Usado em Array de string, int, array simples --- let index = contatos.indexOf(email.value);
    let index = contatos.findIndex(item => item.email === email.value);
    console.log(index);

    // se existir, o mesmo será excluso
    if (index > -1) {
        contatos.splice(index, 1);
        alert('Contato Removido');
        listar();
    }else{
        alert('Contato não encontrado')
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }