/* 
Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
{ fyh: '11/1/2021 11:36:04' }

Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. En caso de error, representar el detalle.
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;"> Bienvenido al servidor express </h1> ')
})

let visitas = 0;
app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es ${++visitas}`)
})

app.get('/fyh', (req, res) => {
    res.send({fyh: new Date().toLocaleString()})
})


const PORT = 0; //0 asigna un puerto aleatorio

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Este es el error ${error}`));