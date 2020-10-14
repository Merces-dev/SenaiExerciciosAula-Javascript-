let url = 'https://5f851274c29abd001619016a.mockapi.io/api/filmes'


//pure function
const listar = () => {

    // fetch == XMLHttpRequest <-- ambos tem a mesma função

    //fetch faz a chamada e retorna um promise
    fetch(url, {
            method: 'GET'
        })
        .then(response => response.json()) // pega o response do JSON
        .then(dados => console.log(dados)) // pega as informações do retorno
        .catch(err => console.error(err)) // retorna o erro
}

const preencherTabela = (dados) => {
    let corpoTabela = document.querySelector('#tabela-lista-corpo');
    corpoTabela.innerHTML = "";
    let linha, colunaId, colunaNome, colunaCategoria, colunaAnoLancamento, colunaAcao;
    dados.forEach(item => {
        linha = document.createElement("tr");

        colunaId = document.createElement("td");
        colunaId.innerText = item.id;

        colunaNome = document.createElement("td");
        colunaNome.innerText = item.nome;

        colunaCategoria = document.createElement("td");
        colunaCategoria.innerText = item.categoria;

        colunaAnoLancamento = document.createElement("td");
        colunaAnoLancamento.innerText = item.anoLancamento;

        colunaAcao = document.createElement("td");

        let btnRemover = document.createElement("input");
        btnRemover.type = "button";
        btnRemover.value = "Remover";
        btnRemover.className = "btn btn-danger"
        btnRemover.setAttribute("onclick", "remover("+ item.id + ")")

        let btnEditar = document.createElement("input");
        btnEditar.type = "button";
        btnEditar.value = "Editar";
        btnEditar.className = "btn btn-success"
        btnEditar.style.marginLeft = '15px';
        btnEditar.setAttribute("onclick", "editar("+ item.id + ")")

        colunaAcao.appendChild(btnRemover);
        colunaAcao.appendChild(btnEditar);

        linha.appendChild(colunaId);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaCategoria);
        linha.appendChild(colunaAnoLancamento);
        linha.appendChild(colunaAcao);
        corpoTabela.appendChild(linha);
    })
}

const remover = (id) => {
    fetch(url + '/' + id, {
        method : 'DELETE'
    })
    .then(response => response.json())
    .then(dados => {
        alert('Filme removido!');
        listar();
    })
    .catch(err => console.error(err));
}

const editar = (id) => {
    // se não definir um método no fetch, ele é como default GET
    fetch(url + '/' + id,)
    .then(response => response.json())
    .then(dado => {
        document.querySelector("#filmeId").value = dado.id;
        document.querySelector("#nome").value = dado.nome;
        document.querySelector("#categoria").value = dado.categoria;
        document.querySelector("#anoLancamento").value = dado.anoLancamento;
    })
    .catch(err => console.error(err));
}

const limparCampos = () => {
    documet.querySelector('#formFilme').reset();
    documet.querySelector('#filmeId');
    documet.querySelector('#nome').focus();
    
}

const salvar = () => {
    event.preventDefault();

    const filme = {
        nome : document.querySelector('#nome').value,
        categoria : document.querySelector('#categoria').value,
        anoLancamento : document.querySelector('#anoLancamento').value,
    }

    let filmeId = document.querySelector('#filmeId').value;
    let method = (filmeId == "" ? 'POST' : "PUT");
    let urlRequest = (filme === "" ? url : url + '/' + filmeId);

    fetch(urlRequest, {
        method : method,
        body : JSON.stringify(filme),
        headers : {
            'content-type' : 'application/json'
        }
    })
    .then(responde => responde.json())
    .then(dado => {
        alert(' O Filme foi salvo!');
        listar();
    })
    .catch(err => console.error("O erro foi " + err));
}
