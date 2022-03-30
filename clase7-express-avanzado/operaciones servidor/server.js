const express = require('express')

const app = express();

//Rutas

//a) http://localhost:8080/api/sumar/3/6
app.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send({ suma: Number(num1) + Number(num2) })
})

//b) http://localhost:8080/api/sumar?num1=4&num2=6
app.get('/api/sumar', (req, res) => {
    const { num1, num2 } = req.query; //se pasa como query
    res.send({ suma: Number(num1) + Number(num2) })
})

//c) falta corregir
app.get('/api/suma/:operacion', (req, res) => {
    const { operacion } = req.params;
    res.send({ operacion: eval(operacion) })
})

// ruta post
app.post('/api', (req, res) => {
    res.send('ok post');
})

// ruta put
app.put('/api', (req, res) => {
    res.send('ok put');
})

// ruta delete
app.delete('/api', (req, res) => {
    res.send('ok delete');
})


//Server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en el servidor -> ${error}`));

