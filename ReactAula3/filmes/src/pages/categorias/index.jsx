import React, { Component } from 'react'
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/menu'

// tem interação com a página portanto é utilizado uma classe, ao contrario, seria uma function que só iria renderizar o Html
class Categorias extends Component {
    
    constructor() {
        super();

        
        this.state = {
            url: 'https://5f851274c29abd001619016a.mockapi.io/api/categorias',
            categorias: [],
            id: '',
            nome: '',
            descricao: '',

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
                this.setState({ categorias: dados });
                this.limparCampos();
                console.log('categoria state: ' + this.state.categorias);
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
                alert('categoria removido!');
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
                this.setState({ descricao: dado.descricao })

            })
            .catch(err => console.error(err));
    }
    salvar(event) {
        event.preventDefault();
        const categoria = {
            nome: this.state.nome,
            descricao: this.state.descricao,
        }

        let categoriaId = this.state.id;
        let method = (categoriaId == "" ? 'POST' : "PUT");
        let urlRequest = (categoria === "" ? this.state.url : this.state.url + '/' + categoriaId);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(categoria),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(responde => responde.json())
            .then(dado => {
                alert(' A categoria foi salva!');
                this.listar();
            })
            .catch(err => console.error("O erro foi " + err));
    }
    limparCampos() {
        this.setState({
            id: '',
            nome: '',
            descricao: '',
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
                    <Jumbotron titulo='Categoria' descricao='Gerencie as suas categorias' />
    
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
                                    <th scope="col">Descricao</th>
                                    <th scope="col">Ações</th>
                                    <th scope="col"><button type="reset" className="btn btn-primary" >Nova Categoria</button></th>
                                </tr>
                            </thead>
                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.categorias.map(item => {
                                        return (
    
                                            < tr key={item.id} >
                                                <td>{item.id}</td>
                                                <td>{item.nome}</td>
                                                <td>{item.descricao}</td>
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

export default Categorias;