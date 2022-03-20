/*  

Metodos
- save(objet): number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
- getById(number): objet - Recibe un id y devuelve el objeto con ese id o null si no esta
- getAll(): objet[] - Devuelve un array con los objetos presentes en el archivo
- deleteById(number): void - Elimina del archivo el objeto con el id buscado.
- deleteAll(): void - Elimina todos los objetos presentes en el archivo

*/

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
            const contenido = await fs.promises.writeFile(this.filename, dato)
            return contenido;
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
            
            const elemento = contenidoParseado.filter(e => e.id === id); 

            console.log("Elemento con id numero " + id + " del array.")
            return elemento;
            
        } catch(error) {
            throw new Error(error)
        }
    }

    //Metodo para eliminar un producto por su ID
    async borrarPorId(id) {
        try{

            const contenido = await this.leer()
            const contenidoParseado = JSON.parse(contenido)
            
            const elementos = contenidoParseado.filter(e => e.id !== id); 
            console.log("Array sin el elemento " + id)

            await this.escribir(JSON.stringify(elementos));
            let contenidoNuevo = await this.leer()     

            return contenidoNuevo;
            
        } catch(error) {
            throw new Error(error);
        }
    }

    //Metodo save
    async save(nuevoElemento) {

        try{

            //leer el contenido
            const contenido = await this.leer()
            //parsearlo a objeto
            const contenidoParseado = JSON.parse(contenido)

            //añadir a la lista de objetos un objeto mas con .push(...) 
            contenidoParseado.push(nuevoElemento)

            return contenidoParseado

        } catch(error) {
            throw new Error(error);
        }

    } 

} 

const main = async () => {
    //contenedorProductos.leerPorId(1)

    //console.log(await contenedorProductos.leerPorId(2));
    //console.log(await contenedorProductos.borrarPorId(1));

    console.log(await contenedorProductos.save( 
        {
            title: 'Nuevo elemento agregado',
            price: 9995.67,
            thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
            id: 3
        }
    ))

};

let contenedor = new Container("./texto.txt") //Creo un nuevo contenedor 

//contenedor.escribir("Hola como estas?")  //Le agrego un string
const contenedorProductos = new Container("./productos.txt"); //Creo el nuevo contenedor 
// contenedorProductos.escribir(JSON.stringify(productos)) //Le asigno los productos




main();