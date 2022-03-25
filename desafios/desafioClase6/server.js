const express = require('express');
const app = express();
const random = require('random');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;"> Bienvenido al servidor express </h1> ')
})

const productos = [                                                                                                                                                     

    {                                                                                                                                                    
      title: 'Escuadra',                                                                                                                                 
      price: 123.45,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
      id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Calculadora',                                                                                                                              
      price: 234.56,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
      id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
      id: 3                                                                                                                                              
    }                                                                                                                                                    
    
]  

class Container{

    constructor(filename, ){
        this.filename = filename
    }

    //Metodo para leer los datos del archivo
    async leer(){
        try {
            let contenido  = await fs.promises.readFile(this.filename, "utf-8")
            return contenido;
        } catch (error) {
            throw new Error(error)
        }
    }

    //Metodo para leer un producto por su ID
    async leerPorId(id) {
        try{

            const contenido = await this.leer()
            const contenidoParseado = JSON.parse(contenido)
            
            const elemento = contenidoParseado.filter(e => e.id === id); 

            console.log("Elemento con id numero " + id + " del array.")
            return elemento;
            
        } catch(error) {
            throw new Error(error)
        }
    }

} 

const main = async () => {
    
    console.log("Hola")
    console.log(contenedorProductos.leer())
    contenedorProductos.leer()

};

const contenedorProductos = new Container("./productos.txt"); //Creo el nuevo contenedor 

main();


app.get('/productos', (req, res) => {
    res.send(productos)
})

app.get('/productoRandom', (req, res) => {    
    res.send(productos[random.int(0,productos.length-1)])
})


const PORT = 8080; //0 asigna un puerto aleatorio

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Este es el error ${error}`));










