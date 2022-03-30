const container = require('./controllers/index.js')

const express = require("express");
const app = express();
const random = require('random');

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;"> Bienvenido al servidor express </h1>  ')
})

app.get("/productos", (req, res) => {    
  container.getAll().then(resp => res.send(resp))
});

app.get("/productoRandom", (req, res)=>{
  container.getAll().then(resp=>res.send(
    resp[ random.int(0, resp.length-1) ]
  ))
})

server.on("error", (error) => console.log(`Error en servidor ${error}`));