const http = require('http')

const getMensaje = () => {

    const hora = new Date().getHours()

    if (hora >= 6 && hora <= 12){
        return 'Buenos dias!'
    } else if (hora >= 13 && hora <= 18){
        return 'Buenas tardes!'
    } else if (( hora >= 19 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        return 'Buenas noches!'
    }


}



const server = http.createServer((req, res) => {
    res.end('Hola mundo!')
})

const PORT = 8080;

const conectedServer = server.listen(PORT, () => {

    console.log((` Servidor HTTP escuchando en el puerto ${connectedServer.adress} `))


})

