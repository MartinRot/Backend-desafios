class Contador{

    constructor(persona) {
        this.persona = persona;
        this.contador = 0;
    }

    static cont = 0;

    aumentarContador(){
        this.contador++;
    }

    aumentarContadorGeneral(){
        this.cont++;
    }
}

let contador1 = new Contador('Pepito')

contador1.aumentarContador();
Contador.aumentarContadorGeneral();

console.log(contador1);
console.log(Contador.cont)



