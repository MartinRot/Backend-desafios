const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const exphbs = require('express-handlebars')

const ProductsApi = require('../api/products.js')
const products = new ProductsApi()



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const MensajesApi = require('../api/mensajes.js') 
const mensajes = new MensajesApi('mensajes.json')


/* Socket */

io.on('connection', async socket => {

    console.log("Nuevo cliente conectado")

    //Muestro productos
    socket.emit('productos', products.getProducts());




})


/* Views handlebars */
app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')
app.set('views', './views')

/* Routes */
app.post('/productos', (req, res) => {
    const product = req.body

    products.save(product)

    console.log("Se guardo el producto")

    res.redirect('/')
})



app.get('/productos', (req, res) => {
    const prods = products.getProducts()
    
    //console.log(prods)

    res.render("view", {
        productos: prods,
        contador: 1
    })

})









/* Server */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`)
})
server.on("error", error => console.log(`Error ${error}`))