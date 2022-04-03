const fs = require('fs')

module.exports = class Container {

    constructor(file) {

        this.save = (obj) => {
            console.log(obj)
            try {
                const content = fs.readFileSync(file, 'utf-8')
                if (!content) {
                    const newId = 1
                    const newObj = {
                        ...obj,
                        id: newId
                    }
                    const newFile = []
                    newFile.push(newObj)
                    fs.appendFisleSync(file, JSON.stringify(newFile))
                    return newId
                } else {
                    const contentParsed = JSON.parse(content)
                    const newId = Number(contentParsed[contentParsed.length - 1].id) + 1
                    const newObj = {
                        ...obj,
                        id: newId
                    }
                    contentParsed.push(newObj)
                    fs.writeFileSync(file, JSON.stringify(contentParsed))
                    return `Id del producto agregado -> ${newId}`
                }
            } catch {
                throw new Error('Error - No se pudo guardar el producto')
            }
        }

        this.getProducts = async () => {
            
            try {                
                const content = fs.readFileSync(file, 'utf-8')
                return JSON.parse(content)              
            } catch {
                throw new Error('Error - Productos no encontrados')
            }
        }

        this.getProduct = async (id) => {
            try {
                const content = fs.readFileSync(file, 'utf-8')
                const parsed = JSON.parse(content)
                const product = parsed.find((e) => e.id == id)

                return product
            } catch {
                throw new Error('Error - Producto no encontrado')
            }
        }

        this.updateProduct = async (newProduct, id) => {
            try {
                const content = fs.readFileSync(file, 'utf-8')
                const parsed = JSON.parse(content)
                const product = parsed.find((e) => e.id == id)

                if (product) {
                    product.title = newProduct.title
                    product.price = newProduct.price
                    product.thumbnail = newProduct.thumbnail
                    fs.writeFileSync(file, JSON.stringify(parsed))
                } else {
                    console.log('No se encontró el producto')
                }
            } catch {
                throw new Error('Error - Producto no encontrado')
            }
        }

        this.deleteProduct = async (id) => {
            try {
                const content = fs.readFileSync(file, 'utf-8')
                const parsed = JSON.parse(content)
                const product = parsed.findIndex((e) => e.id == id)
                if (product >= 0) {
                    parsed.splice(product, 1)
                    fs.writeFileSync(file, JSON.stringify(parsed))
                    return `Producto id: ${id} eliminado`
                } else {
                    return 'No se encontró el producto'
                }
            } catch {
                throw new Error('Error - Producto no encontrado')
            }
        }
    }
}
