//Iniciar servidor en Node -> node server.js
//Iniciar servidor en Nodemon -> nodemon server.js

const http = require('http')
 
const getMensaje = () => {
    const hora = new Date().getHours()
    const minutos = new Date().getMinutes()

    console.log(hora)
    console.log(minutos)

    if (hora >= 6 && hora <= 12){
        return 'Buenos dias!'
    } else if (hora >= 13 && hora <= 18){
        return 'Buenas tardes!'
    } else if (( hora >= 19 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        return 'Buenas noches!'
    }

} 

//Creacion server
const server = http.createServer((req, res) => {
    res.end(getMensaje());
})

//Puerto asignado
const PORT = 8080;

//Puerto escuchando
const conectedServer = server.listen(PORT, () => {

    console.log(`Servidor HTTP escuchando en el puerto ${conectedServer.address().port} `)

})

