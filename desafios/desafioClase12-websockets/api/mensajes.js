const {
    promises: fs
} = require('fs')

class MensajesApi {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async save(prod) {

        const prods = await this.getProducts()

        let newId
        if (prods.length == 0) {
            newId = 1
        } else {
            newId = prods[prods.length - 1].id + 1
        }

        const newProd = {
            ...prod,
            id: ++this.id
        }
        prods.push(newProd)

        try {
            await fs.writeFile(this.ruta, JSON.stringify(prods, null, 1))
            return newId
        } catch (error) {
            throw new Error(`Error ${error}`)
        }

    }

    async getProducts() {

        try {
            const prods = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(prods)
        } catch (error) {
            return []
        }

    }

    async getProduct(id) {
        const prods = await this.getProducts()
        const prod = prods.find(prod => prod.id == id)
        return prod || {
            error: 'Error - Producto no encontrado'
        }
    }

    async updateProduct(prod, id) {
        const prods = await this.getProducts()
        const index = prods.findIndex(p => p.id == id)

        if (index !== -1) {
            prods[index] = prod
            try {
                await fs.writeFile(this.ruta, JSON.stringify(prods, null, 1))
            } catch (error) {
                throw new Error(`Error ${error}`)
            }
        } else {
            throw new Error(`Error - Producto no encontrado ${error}`)
        }

    }

    async deleteProduct(id) {
        const prods = await this.getProducts()
        const index = prods.findIndex(p => p.id == id)

        if (index !== -1) {
            prods.splice(index, 1)
            try {
                await fs.writeFile(this.ruta, JSON.stringify(prods, null, 1))
            } catch (error) {
                throw new Error(`Error ${error}`)
            }
        } else {
            throw new Error(`Error - Producto no encontrado ${error}`)
        }
    }

}


module.exports = MensajesApi