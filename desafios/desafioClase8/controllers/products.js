const products = [
    { "title": "Zapatillas Nike", "price": "7698", "thumbnail": "https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe.png", "id": "1"},
    { "title": "Zapatillas Adidas", "price": "9863", "thumbnail": "https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe.png", "id": "2"},
    { "title": "Zapatillas Puma", "price": "8530", "thumbnail": "https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe.png", "id": "3"},
]

//ok
let productsPromise = new Promise ((resolve, reject) => {
    setTimeout(function(){
        resolve(products)
    }, 250)
})

//ok
export const getProducts = () => {
    return productsPromise
}

//ok
export const getProduct = id => {
    let product = products.find(products => products.id === id)    
    return product
}

//ok
export const addProduct = product => {    
    product = { ...product, id: products.length + 1 }
    products.push(product)
}

export const updateProduct = (newProduct, id) => {

    const producto = products.find((e) => e.id == id)
    //console.log(producto)

    if (producto){
      producto.title = newProduct.title
      producto.price = newProduct.price
      producto.thumbnail = newProduct.thumbnail

      products[id] = producto
      console.log(products[id])

    } else {
      console.log('No se encontró el producto solicitado')
    }

}

//
export const deleteProduct = id => {

    const producto = products.find((e) => e.id == id)
    products.splice(id, 1)

    //products[id] = []

    console.log('Producto eliminado')
}


