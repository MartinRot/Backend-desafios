const fs = require('fs');

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

    //Metodo para escribir datos 
    async escribir(dato){
        try{
            await fs.promises.writeFile(this.filename, dato)
            console.log("Escrito correctamente")
        } catch (error) {
            console.log(error);
        }
    }

    //Metodo para borrar los datos
    async borrar(){
        try{
            await fs.promises.writeFile(this.filename, "[]")
            console.log("Contenido borrado correctamente")
        } catch (error){
            throw new Error(error)
        }    
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
            
            return contenidoParseado;

            console.log(contenido)

        } catch(error) {
            throw new Error(error)
        }
    }

} 

const main = async () => {
    //contenedorProductos.leerPorId(1)

    console.log(await contenedorProductos.leerPorId(1))

};


let contenedor = new Container("./texto.txt") //Creo un nuevo contenedor 

contenedor.escribir("Hola como estas?")  //Le agrego un string
contenedor.borrar() //Borro el contenido de ese contenedor
const contenedorProductos = new Container("./productos.txt"); //Creo el nuevo contenedor 
// contenedorProductos.escribir(JSON.stringify(productos)) //Le asigno los productos

main();


