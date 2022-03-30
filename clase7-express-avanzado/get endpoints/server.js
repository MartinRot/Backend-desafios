const express = require('express')

const app = express();

const frase = 'Hola mundo cómo están'

//ENDPOINTS (tipo get)
app.get('/api/frase', (req, res) => {
    res.send(frase);
})

app.get('/api/letras/:num', (req, res) => {

    const num = parseInt(req.params.num) //parseo lo que me llega a entero

    if (isNaN(num)){ //Compruebo si no es un numero
        return res.send({ error: 'El parametro ingresado no es un número.' })
    }

    if(num < 1 || num > frase.length) { //Si es un numero compar su longitud
        return res.send({ error: 'El parametro ingresado esta fuera de rango.' })
    }

    //Devuelvo la posicion del numero en la frase
    res.send(frase[num - 1])

})

app.get('/api/palabras/:num', (req, res) => {

    const num = parseInt(req.params.num)

    if (isNaN(num)) { 
        return res.send({ error: 'El parametro ingresado no es un número.'})
    }

    const palabras = frase.split(' ')//Separa la frase cuando encuentra un ' '
    if(num < 1 || num > palabras.length){
        return res.send({ error: 'El parametro esta fuera de rango.'})
    }

    res.send(palabras[num - 1])

})

//Fin endpoints

//SERVER
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor -> ${error}`));
