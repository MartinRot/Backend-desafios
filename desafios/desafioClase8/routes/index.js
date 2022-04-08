const express = require('express')
const bodyparser = require('body-parser')

// Constrollers
const Container = require('../controllers/products.js')
const path = './controllers/products.txt'
const products = new Container(path)

// Routes
const router = express.Router()
router.use(bodyparser.json())
module.exports = router

router.use((req, res, next) => {//Middleware para modificar el metodo de envio del formulario update
    if (req.originalUrl === '/api/productos/:id') {
      if (req.method === 'POST') {
        req.method = 'PUT'
      }
    }
    next()
})

// Desc Devuelve todos los productos.
// Route    GET /api/productos
// Access   Private
router.get('/api/productos', (req, res) => {
    products.getProducts().then((result) => {
        res.send(result)
    })
})

// Desc Devuelve un producto según su id.
// Route   GET /api/productos/:id
// Access   Private
router.get('/api/productos/:id', (req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).json({message: 'No se encontró ningun producto con el id ingresado'})
    }

    products.getProduct(Number(id)).then((result) => {
        res.status(200).json(result)
    })
})

// Desc Recibe y agrega un producto, y lo devuelve con su id asignado.
// Route   POST /api/productos/
// Access   Private
router.post('/api/productos', (req, res) => {  
    const product = req.body

    if (!product) {
        res.status(400).json({message: 'No se encontró ningun producto'})
    }
    
    const id = products.save(product)
    res.status(200).json(id)
})

// Desc Recibe y actualiza un producto según su id.
// Route   PUT /api/productos/:id
// Access   Private
router.put('/api/productos/:id', (req, res) => {    
    const product = req.body
    let id
    if (req.params.id==':id'){
        id=req.body.id
    }else{
        id=req.params.id
    }
    products.updateProduct(product, id)
    res.status(200)({ obj: 'Producto actualizado!' })    
})

// Desc Elimina un producto según su id.
// Route   DELETE /api/productos/:id
// Access   Private
router.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id
    products.deleteProduct(id).then((result) => {
        res.status(200)(result)
    })
})


