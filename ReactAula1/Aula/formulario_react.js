let form = React.createElement('form', null, 
// Crio o input
React.createElement('input', {
    type: 'email',
    placeholder: 'Informe o email',
    required: true
}), 
// Crio o Button
React.createElement("Button", {
    type: 'submit',
    
}, 'Entrar')
);

ReactDOM.render(form, document.querySelector('#root'))