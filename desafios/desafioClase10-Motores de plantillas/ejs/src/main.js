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