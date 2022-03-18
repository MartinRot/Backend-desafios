
//Ejercicio asincronismo y callback
/* Desarrolle una funcion 'mostrarLetras' que reciba un string como parametro y permita 
mostrar una vez por segundo cada uno de sus caracteres. Al finalizar, debe invocar a la siguiente funcion 
que se le pasa tambien como parametro: 'const fin = () => console.log('terminé')'
Realizar tres llamadas a 'mostrarLetras' con el mensaje '¡Hola!' y demoras de 0,250 y 500mS
verificando que los mensajes de salida se intercalen. */

const mostrarLetras = (palabra, intervalo) => {
    for (let i = 0; i < palabra.length; i++) {
        setTimeout(() => console.log(palabra.charAt(i)), intervalo*i)
    }
}

mostrarLetras('hola como estas?', 1000); 
