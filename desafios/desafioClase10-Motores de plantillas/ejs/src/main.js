const express = require('express')

const ProductsApi = require('../api/products.js')
const products = new ProductsApi()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


/* Views ejs */
app.set('views', './views')
app.set('view engine', 'ejs')


/* Routes */
app.post('/productos', (req, res) => {
    const product = req.body

    console.log("aca guardar product")
    console.log("Hola")

    res.redirect('/')
})

app.get('/productos', (req, res) => {
    const prod = products.getProducts()
    
    console.log(prod)

    res.render("vista", {
        productos: products,
    })

})

/* Server */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`)
})
server.on("error", error => console.log(`Error ${error}`))