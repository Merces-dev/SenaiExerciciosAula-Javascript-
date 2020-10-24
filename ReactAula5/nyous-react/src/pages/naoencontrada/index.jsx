import React from 'react'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Jumbotron } from 'react-bootstrap'

const NaoEncontrada = () => {
    return (
        <div>
            <Menu />
            <br/>
            <br/>
                <Container  className='text-center'>
                        <h1>404 Error</h1>
                        <p>Not Found</p>
                </Container>
            <Rodape />
        </div>
    )
}

export default NaoEncontrada;