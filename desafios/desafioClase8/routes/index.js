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

// Devuelve todos los productos.
router.get('/api/productos', (req, res) => {
    products.getProducts().then((result) => {
        res.send(result)
    })
})

// Devuelve un producto según su id.
router.get('/api/productos/:id', (req, res) => {
    const id = req.params.id
    products.getProduct(Number(id)).then((result) => {
      res.send(result)
    })
  })

// Recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/api/productos', (req, res) => {  
    const product = req.body
    console.log(product)
    const id = products.save(product)
    res.json(id)
})

// Recibe y actualiza un producto según su id.
router.put('/api/productos/:id', (req, res) => {    
    const product = req.body
    let id
    console.log(`Hola ${id}`)
    if (req.params.id==':id'){
        id=req.body.id
    }else{
        id=req.params.id
    }
    products.updateProduct(product, id)
    res.send({ obj: 'Producto actualizado!' })    
})

// Elimina un producto según su id.
router.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id
    products.deleteProduct(id).then((result) => {
        res.send(result)
    })
})


