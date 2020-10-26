import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import './index.css';
import logo from '../../assets/img/logo.svg'
const Cadastrar = () => {

        // string email {get; set}
        // const [nome,  setNome] = useState('');
        // const [email, setEmail] = useState('');
        // const [senha, setSenha] = useState('');
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' >
                    <div className='text-center'>
                        <img src={logo} alt="Logo" style={{ width: '64px' }} />

                    </div>
                    <br />
                    <small>Informe os dados para cadastro Abaixo</small>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome </Form.Label>
                        <Form.Control type="text" /*value={nome} onChange={event => setNome(event.target.value)}*/  placeholder="Nome Completo" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" /* value={email} onChange={event => setEmail(event.target.value)} */ placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" /* value={senha} onChange={event => setSenha(event.target.value)} */ placeholder="Senha" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br /><br />
                    <a href='/login' style={{ marginTop: '35px' }}>Já tenho uma conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Cadastrar