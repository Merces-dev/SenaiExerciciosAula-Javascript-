
ReactDOM.render(
    // O que quero renderizar
    <div style ={{background: '#089', color: 'white'}}>
    <input  type= 'email' placeholder= 'Informe o email' required  />
    <input type="button" value = 'Entrar' id='btnEntrar'Entrar/>
    </div>,

    // Onde quero renderizar
    document.querySelector('#root')
);