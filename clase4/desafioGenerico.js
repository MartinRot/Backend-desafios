const fs = require('fs');  

 const date = new Date();

console.log(date)

console.log("toLocaleDateString " + date.toLocaleDateString());
console.log("toLocaleTimeString " + date.toLocaleTimeString());

let fyh = `Fecha: ${date.toLocaleDateString()} -- Hora: ${date.toLocaleTimeString()}`;

try{
    /* fs.appendFileSync('./fyh.txt', fyh)  */ //append agrega al final del archivo
    fs.writeFileSync('./fyh.txt', fyh) //write sobreescribe el archivo
} catch (error) {
    console.log(error)
}

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(data)
} catch (error) {
    /* console.log(error) */
    throw new Error ('Fallo la lectura del archivo')
}
