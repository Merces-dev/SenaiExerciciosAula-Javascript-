
ReactDOM.render(
    // O que quero renderizar
    <div style ={{background: '#089', color: 'white'}}>
    <input  type= 'email' placeholder= 'Informe o email' required  />
    <button type="button" id='btnEntrar'>Entrar</button>
    </div>,

    // Onde quero renderizar
    document.querySelector('#root')
);