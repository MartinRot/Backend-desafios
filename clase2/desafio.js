/* Desafio clase 2 - Clases */

class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = "Martin"; //String 
        this.apellido = "Rotelli"; //String 
        this.libros = [
                { nombre: "El señor de las moscas", autor: "William Golding"},
                { nombre: "Fundacion", autor: "Isaac Asimov" }
            ]; //Objet[]
        this.mascotas = ['pe']; //String[]
    };

    getFullName() {
        console.log(`Hola ${this.nombre + " " + this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
        Usuario.contador++;
    }

    static contador = 1    
    countMascotas(){
        return Usuario.contador;
    }
    /* countMascotas devolviendo la cantidad del array */
    /* countMascotas() {
        return this.mascotas.length;
    } */
    
 
    /* retorna un array con solo los nombres del array de libros del usuario */
   getBooksNames(){

        let nombresLibros = [];
        this.libros.forEach((e) => 
            nombresLibros.push(e.nombre)
        )

        return nombresLibros;       
   } 

   /* recibe un string nombre y un string autor y debe agregar un objeto */
   addBook(nombre, autor){
       this.libros = [...this.libros, {nombre, autor} ]
   }

}

let persona1 = new Usuario('Persona1');

/* getFullName */
persona1.getFullName();

/* addMascota */
persona1.addMascota("pepe");
persona1.addMascota("pepito");
persona1.addMascota("pepito jr");

/* addBook */
persona1.addBook("el señor de los anillos", "JRR Tolkien");

/* getBooksNames */
let libroActual = persona1.getBooksNames();
console.log("Titulos de los libros: ")
for(let i = 0; i < libroActual.length; i++){
    console.log("Libro " + libroActual[i] ); 
}

/* countMascotas */
console.log("El usuario tiene " + persona1.countMascotas() + " mascotas.");



/* console.log(persona1) */

