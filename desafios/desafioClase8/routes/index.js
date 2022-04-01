import { Router } from 'express'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from '../controllers/products.js'
const router = Router()

router.get('/', (req, res) => {
    res.send('Ruta de prueba get')
})

//OK
// Devuelve todos los productos.
router.get('/productos', async (req, res) => {
    let products = await getProducts();
    res.send(products)
})

//OK
// Devuelve un producto según su id.
router.get('/productos/:id', (req, res) => {
    let id = req.params.id
    let producto = getProduct(id)
    res.send(producto)

    //res.send({ id })
})

//ok
// Recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/productos', (req, res) => {  
    let product = (req.body)
    console.log(product)
    addProduct(product)
    res.send(product) 
})

//ok
// Recibe y actualiza un producto según su id.
router.put('/productos/:id', (req, res) => {
    
    const newProduct = req.body
    let id = req.params.id
    updateProduct(newProduct, id)
    res.send({ "message": 'Producto actualizado' })
    
})

// Elimina un producto según su id.
router.delete('/productos/:id', (req, res) => {
    let id = req.params.id
    deleteProduct(id)
    res.send({ "message": "Deleted"})
})

export default router;
