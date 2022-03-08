/* let listaDatos = [ 'dato1', 'dato2', 'dato3'];

function mostrarLista(datos){

    if(datos.length > 0) {
        console.log(datos)
    }else{
        console.log("No hay datos")
    }

    
}

mostrarLista(listaDatos); */


/* Funcion autoinvocada - autoejecutable */
/* (function (){

    let listaDatos = [1, 2, 3];

    if(listaDatos.length > 0){
        for(let i=0; i<listaDatos.length; i++){
            console.log(listaDatos[i]);
        }
    }else{
        console.log("Lista vacia")
    }

})()
 */

/* function crearMultiplicador(num1){

    return function (num2){
        return num1 * num2;
    }    asd

}

console.log( crearMultiplicador(2)(3) ) */



function duplicar(num1){

    return function(){
        return num1 *2
    }

}

console.log(duplicar(6)())



