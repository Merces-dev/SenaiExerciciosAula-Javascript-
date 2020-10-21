import React, { Component } from 'react'
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/menu'

// tem interação com a página portanto é utilizado uma classe, ao contrario, seria uma function que só iria renderizar o Html
class Categorias extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Jumbotron titulo = 'Categorias' descricao = 'Gerencie e defina suas categorias'/>
            </div>

        )
    }
}

export default Categorias;