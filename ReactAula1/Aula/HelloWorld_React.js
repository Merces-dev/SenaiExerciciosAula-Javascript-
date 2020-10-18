

// let h1 = document.createElement('h1');
let root = document.querySelector('#root')
// h1.innerHTML = 'Hello World';

// root.innerHTML = h1.innerHTML;

// O mesmo exemplo acima porem utilizando react


//Crio elemento com o react
let h1 = React.createElement('h1', null, 'Hello World, React');
// Renderizo com o ReactDOM
ReactDOM.render(h1, root)