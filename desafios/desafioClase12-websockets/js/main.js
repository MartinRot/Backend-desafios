const socket = io.connect();

/* const prods = document.getElementById('productos')
prods.addEventListener('submit', e => {

}) */

socket.on('productos', productos => {
    document.getElementById('productos').innerHTML = <p>hola</p>
})