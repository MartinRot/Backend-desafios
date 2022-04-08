class ProductsApi {
    constructor() {
        this.products = []
        this.id = 0
    }

    /* Desc
        - Declara un nuevo producto con los datos del producto que le llega por params
        - Lo pushea al array products
        - retorna el newProduct
     */
    save(prod) {
        const newProd = { ...prod, id: ++this.id }
        this.products.push(newProd)
        return newProd
    }

    /* Desc - Retorna products */
    getProducts() {
        return [...this.products]
    }

    /* Desc 
        - Busca el producto con el id recibido por params
        - Retorna el producto si lo encuentra
    */
    getProduct(id) {
        const prod = this.products.find(prod => prod.id == id)
        return prod || { error: 'Error - Producto no encontrado' }
    }

    /* Desc 
        - recibe un producto y un id
        - 
    */
    updateProduct(prod, id) {
        const newProd = { id: Number(id), ...prod }
        const index = this.products.findIndex(p => p.id == id)
        if (index !== -1) {
            this.products[index] = newProd
            return newProd
        } else {
            return { error: 'Error - Producto no encontrado' }
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(prod => prod.id == id)
        if (index !== -1) {
            return this.products.splice(index, 1)
        } else {
            return { error: 'Error - Producto no encontrado' }
        }
    }
}

module.exports = ProductsApi
