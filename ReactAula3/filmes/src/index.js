import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filmes from './pages/filmes';
import Categorias from './pages/categorias';
import NaoEncontrada from './pages/naoencontrada';


import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component ={Filmes}/>
      <Route path='/categorias' component ={Categorias}/>
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
