const express = require('express');
const app = express();

app.use(express.json());

const palabras = ['Frase', 'inicial'];

//http://localhost:8080/api/frase
app.get('/api/frase', (req, res) => {
    res.send({ frase: palabras.join(' ') }) //Join une las palabras agregando ' ' 
})

//http://localhost:8080/api/frase/1
app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    res.send({ buscada: palabras[parseInt(pos) - 1] })
})

//En postman metodo post (agregar palabra) -> http://localhost:8080/api/palabras -> body -> raw -> json
app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body;
    palabras.push(palabra);
    res.send({ agregada: palabra, posicion: palabras.length })
})

//En postman metodo put (actualizar palabra) -> http://localhost:8080/api/palabras/1 -> body -> raw -> json
app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body;
    const { pos } = req.params;
    const palabraAnt = palabras[ parseInt(pos) -1 ];
    palabras[ parseInt(pos) - 1 ] = palabra;
    res.send({ actualizada: palabra, anterior: palabraAnt })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const palabra = palabras.splice(parseInt(pos) -1, 1);
    res.send({ borrada: palabra })
})

//Server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor -> ${error}`));


/* json para postman

{
    "palabra": "palabra nueva"
}

*/