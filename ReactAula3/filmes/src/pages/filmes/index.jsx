import React, { Component } from 'react'
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/menu';



// tem interação com a página portanto é utilizado uma classe, ao contrario, seria uma function que só iria renderizar o Html
class Filmes extends Component {


    constructor() {
        super();

        // string url {get; set;} = 'https://5f851274c29abd001619016a.mockapi.io/api/filmes'
        // object[] filmes {get; set;}
        this.state = {
            url: 'https://5f851274c29abd001619016a.mockapi.io/api/filmes',
            filmes: [],
            id: '',
            nome: '',
            categoria: '',
            anoLancamento: '',

        }
    }
    componentDidMount() {
        this.listar();
    }

    listar() {
        // fetch == XMLHttpRequest <-- ambos tem a mesma função
        // fetch faz a chamada e retorna um promise
        fetch(this.state.url, {
            method: 'GET'
        })
            .then(response => response.json()) // pega o response do JSON
            .then(dados => { // pega as informações do retorno
                this.setState({ filmes: dados });
                this.limparCampos();
                console.log('filmes state: ' + this.state.filmes);
            })
            .catch(err => console.error(err)) // retorna o erro
    }
    remover(event) {
        event.preventDefault();
        console.log(event.target.value);

        fetch(this.state.url + '/' + event.target.value, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(dados => {
                alert('Filme removido!');
                this.listar();
            })
            .catch(err => console.error(err));
    }
    editar(event) {
        event.preventDefault();
        console.log(event.target.value);

        // se não definir um método no fetch, ele é como default GET
        fetch(this.state.url + '/' + event.target.value,)
            .then(response => response.json())
            .then(dado => {
                this.setState({ id: dado.id });
                this.setState({ nome: dado.nome });
                this.setState({ categoria: dado.categoria })
                this.setState({ anoLancamento: dado.anoLancamento });

            })
            .catch(err => console.error(err));
    }
    salvar(event) {
        event.preventDefault();
        const filme = {
            nome: this.state.nome,
            categoria: this.state.categoria,
            anoLancamento: this.state.anoLancamento,
        }

        let filmeId = this.state.id;
        let method = (filmeId == "" ? 'POST' : "PUT");
        let urlRequest = (filme === "" ? this.state.url : this.state.url + '/' + filmeId);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(filme),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(responde => responde.json())
            .then(dado => {
                alert(' O Filme foi salvo!');
                this.listar();
            })
            .catch(err => console.error("O erro foi " + err));
    }
    limparCampos() {
        this.setState({
            id: '',
            nome: '',
            categoria: '',
            anoLancamento: ''
        })
    }

    setNome(event) {
        event.preventDefault();
        this.setState({ nome: event.target.value })
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <Menu />
                <Jumbotron titulo='Filmes' descricao='Gerencie os seus filmes' />

                <div className="container">
                    <div className="bd-example" >
                        <form id="formFilme" onSubmit={this.salvar.bind(this)}>
                            <input type="hidden" id="filmeId" value="" />
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" id="nome" onChange={this.setNome.bind(this)} aria-describedby="nome" value={this.state.nome} placeholder="Informe o Nome" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input type="text" className="form-control" id="categoria" onChange={event => this.setState({ categoria: event.target.value })} value={this.state.categoria} placeholder="Informe a Categoria" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" id="anoLancamento" onChange={event => this.setState({ anoLancamento: event.target.value })} value={this.state.anoLancamento} placeholder="Informe o Ano de Lançamento" />
                            </div>
                            <button type="button" className="btn btn-secondary" onClick={this.limparCampos.bind(this)}>Cancelar</button>
                            <button type="submit" className="btn btn-success"  >Salvar</button>
                        </form>
                    </div>

                    <table className="table" style={{ margintop: '40px' }}>

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Ano Lançamento</th>
                                <th scope="col">Ações</th>
                                <th scope="col"><button type="reset" className="btn btn-primary" >Novo Filme</button></th>
                            </tr>
                        </thead>
                        <tbody id="tabela-lista-corpo">
                            {
                                this.state.filmes.map(item => {
                                    return (

                                        < tr key={item.id} >
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.anoLancamento}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" value={item.id} onClick={this.remover.bind(this)}>Remover</button>
                                                <button type="button" className="btn btn-warning" value={item.id} onClick={this.editar.bind(this)} >Editar</button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}


export default Filmes;