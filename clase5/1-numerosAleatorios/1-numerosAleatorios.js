/*  A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
    B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. 
    Representar por consola los resultados.
 */

console.log("HOALAS")
console.log("Numero random " + Math.random()*10);

/* ############################### */

const random = require('random');

let numbers = new Map();

for (let i = 0; i < 10000; i++){

    let randomNum = random.int(1,2);

    if(numbers.has(randomNum)){
        numbers.set(randomNum, numbers.get(randomNum)+1)
    }else{
        numbers.set(randomNum, 1);
    }
}

console.log(numbers);
 