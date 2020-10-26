import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode'

//PÁGINAS

import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastro';
import Eventos from './pages/eventos';
import Dashboard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';
import NaoEncontrada from './pages/naoencontrada';

const token = localStorage.getItem('token-nyous-tarde') 

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      token !== null ?
      <Redirect to={{pathname:'/login', state:{from : props.location}}}/>:
    <Component {...props}/>
    }
  />
);
const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      token !== null && jwt_decode(token.role === 'Admin') ?
      <Redirect to={{pathname:'/login', state:{from : props.location}}}/>:
    <Component {...props}/>
    }
  />
);

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component ={Home}/>
      <Route path='/login' component ={Login}/>
      <RotaPrivada path='/eventos' component ={Eventos}/>
      <Route path='/cadastro' component ={Cadastrar}/>
      <RotaPrivadaAdmin path='/admin/dashboard' component ={Dashboard}/>
      <RotaPrivadaAdmin path='/admin/eventos' component ={CrudEventos}/>
      <RotaPrivadaAdmin path='/admin/categorias' component ={CrudCategorias}/>
      <Route component ={NaoEncontrada}/>

    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
