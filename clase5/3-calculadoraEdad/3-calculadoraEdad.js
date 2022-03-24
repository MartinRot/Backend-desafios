/* Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment. 

//https://momentjs.com/

 1- npm init -y Crea el package.json
 2- instalacion de moment -> npm install moment 
 3- se agrega "type": "module" a package.json
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import moment from 'moment';

let fecha1 = moment('2022-03-24');
let fecha2 = moment('1988-06-27');

console.log(fecha1.format('dddd'))


//Format Dates
console.log("----- Format Dates -----")
console.log(fecha1.format('MMMM Do YYYY, h:mm:ss a')); // March 24th 2022, 1:32:18 pm
console.log(fecha1.format('dddd'));                    // Thursday
console.log(fecha1.format("MMM Do YY"));               // Mar 24th 22
console.log(fecha1.format('YYYY [escaped] YYYY'));     // 2022 escaped 2022
console.log(fecha1.format('L'));                          // 2022-03-24T13:32:18-03:00
console.log(fecha1.format('L'));                          // 06/27/1988
//Relative Time
console.log("----- Relative Time -----")
console.log(moment(fecha1, "YYYYMMDD").fromNow()); // 10 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); // 10 years ago
console.log(moment().startOf('day').fromNow());        // 14 hours ago
console.log(moment().startOf('month').fromNow());      // X days ago  
console.log(moment().endOf('day').fromNow());          // in 10 hours
console.log(moment().startOf('hour').fromNow());       // 36 minutes ago

console.log(fecha1)

console.log(fecha2.diff(fecha1, 'days'), 'dias de diferencia');

console.log( `Hoy es ${fecha1.format('L')}` );
console.log( `Naci el ${fecha2.format('L')}` )
console.log( `Desde mi nacimiento han pasado ${0 - fecha2.diff(fecha1, 'years')}, años. ` )
console.log( `Desde mi nacimiento han pasado ${0 - fecha2.diff(fecha1, 'days')}, dias. ` )
