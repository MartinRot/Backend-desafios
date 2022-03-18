
const operacion = (a,b,op) => op(a,b);

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;

let valor = operacion(3,4, suma);
console.log("suma " + valor);

valor = operacion(3,4, resta);
console.log("resta " + valor);

valor = operacion(3,4, multiplicacion);
console.log("multiplicacion " + valor);

valor = operacion(3,4, division);
console.log("division " + valor);




