let url = 'https://5f851274c29abd001619016a.mockapi.io/api/categorias';
let categoria = document.querySelector('#categoria')
let categorias = []


function listar() {
    let xhrGet = new XMLHttpRequest();
    // Se listar não der erro
    xhrGet.onload = listarSucesso;

    // Se listar der erro
    xhrGet.onerror = listarErro;

    // Abrindo conexão com o banco, utilizando o Método GET
    xhrGet.open('GET', url);

    // Envia a Conexão para a API
    xhrGet.send();
}

function listarSucesso() {
    console.log('Sucesso')
    // Pega o retorno da API através do this/XmlHttpRequest
    const data = this.responseText;
    // Converte data para Array (JSON)
    categorias = JSON.parse(data);
    // Mostrar o retorno na tela
    console.log(categorias);
}

function listarErro(err) {
    console.error(err)
}

function cadastrar() {
    event.preventDefault();
    let xhrPost = new XMLHttpRequest();
    xhrPost.onload = cadastrarSucesso;
    xhrPost.onerror = cadastrarErro;
    xhrPost.open('POST', url);
    // Define qual o tipo de conteúdo do Header
    xhrPost.setRequestHeader('content-type', 'application/json')

    // Cria o objeto com o nome da categoria
    let params = {
        name: categoria.value
    }
    // Envia no POST convertido para JSON
    xhrPost.send(JSON.stringify(params));
}

function cadastrarSucesso() {
    console.log('Sucesso');
    console.log(this.status);
    console.log(JSON.parse(this.responseText));
    listar();
}

function cadatrarErro(err) {
    console.error(err + 'ERROR');
}

function remover(){
    let xhrDelete = new XMLHttpRequest();
    xhrDelete.onload = removerSucesso;
    xhrDelete.onerror = removerErro;
    xhrDelete.open('DELETE',url + "/" + categoria.value )
    xhrPost.send();


}
function removerSucesso(){
    console.log('Sucesso');
    console.log(this.status);
    console.log(JSON.parse(this.responseText));
    listar();
}

function removerErro(err){
    console.error(err + 'ERROR');

}