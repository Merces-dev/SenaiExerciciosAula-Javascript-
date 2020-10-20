import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            < div className = 'background'>
                <h1 className = 'margin'>{this.props.texto}</h1>
                <h4 className = 'margin'>{this.props.descricao || 'Descrição não informada'}</h4>
            </div>
        )
    }


}

export default Header