    // EXEMPLOS DE ARRAY
    // let numeros = [5, 10, 15];    -   ARRAY DE INTEIROS
    // let pessoas = [{id : 1, nome: 'tejota'}, {id: 2, nome : 'giovani'}]    -   ARRAY DE OBJETOS

    let frutas = ['maça', 'morango', 'pessego', 'melancia'];
    let fruta = document.querySelector('#fruta');

    let btnCadastrar = document.querySelector('#btnCadastrar');
    btnCadastrar.addEventListener('click', Cadastrar)

    let btnRemover = document.querySelector('#btnRemover');
    btnRemover.addEventListener('click', Remover)

    function Listar() {

        let corpoTabela = document.querySelector('#tabela-lista-corpo'); //<tbody></tbody>
        //Limpa o tbody da tabela
        corpoTabela.innerHTML = "";

        //Irá armazenar os elemento tr e td
        let linha, colunaNome;

        //Percorrendo o array
        //Item é a referencia ao meu elemento/objeto no array
        frutas.forEach(item => {
            linha = document.createElement('tr'); //<tr></tr>
            colunaNome = document.createElement('td');//<td></td>

            colunaNome.innerText = item; //<td>Maça</td>

            linha.appendChild(colunaNome); //<tr><td>Maça</td></tr>
            corpoTabela.appendChild(linha); //<tbody><tr><td>Maça</td></tr></tbody>
        });
    }
    function Cadastrar(event) {
        event.preventDefault();
        let fruta = document.querySelector('#fruta');

        frutas.push(fruta.value);

        fruta.value = '';
        fruta.focus();

        Listar();

        alert('Fruta Cadastrada');

    }
    function Remover(event) {
        event.preventDefault();

        //pega o nome da fruta
        let fruta = document.querySelector('#fruta');
        //verifica se existe no array
        // frutas.forEach(item => {
        //     if(item == fruta.value){
        //         //remove fruta
        //     }
        // })

        let index = frutas.indexOf(fruta.value);
        console.log(index);

        //existindo exclui
        if (index > -1) {
            frutas.splice(index, 1)
            alert('Fruta removida');
            fruta.value = '';

            Listar();
        } else {
            alert('Fruta não encontrada');
        }
    }