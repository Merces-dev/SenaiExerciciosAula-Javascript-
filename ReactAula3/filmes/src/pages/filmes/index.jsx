import React, { Component } from 'react'
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/menu';


// tem interação com a página portanto é utilizado uma classe, ao contrario, seria uma function que só iria renderizar o Html
class Filmes extends Component {

    render() {
        return (
            <div>
                <Menu />
                <Jumbotron titulo = 'Filmes' descricao = 'Gerencie os seus filmes' />
            </div>
        )
    }
}


export default Filmes;