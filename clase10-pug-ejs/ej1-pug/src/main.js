const express = require('express')

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    console.log(req.query)
    res.render('nivel', req.query);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))

//http://localhost:8080/datos?min=1&max=100&nivel=25&titulo=%3Ci%3EMedidor%3C/i%3E