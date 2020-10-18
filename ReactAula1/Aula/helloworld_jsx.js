

ReactDOM.render(
    // O que quero renderizar
    <div style ={{background: '#089', color: 'white'}}>
    <h1>Hello World JSX</h1>
    <input type='email' placeholder = 'Informe o email' />
    <button type= "button" style ={{background: 'black', color: 'white'}}>Enviar</button>
    </div>,

    // Onde quero renderizar
    document.querySelector('#root')
);