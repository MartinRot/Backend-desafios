nombre
apellido
libros[]
mascotas[]asd

class Usuario{

    constructor(usuario) {
        this.nombre = nombre;        
        this.apellido = nombre;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    static cont = 0;

    aumentarContador(){
        this.contador++;
    }

    aumentarContadorGeneral(){
        this.cont++;
    }
}