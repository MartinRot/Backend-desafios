/* Para crear el package.json -> ' npm init -y ' */
const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (error, contenido) => {

    if(error){
        throw new Error('Error al leer package.json')
    }else{
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: '2kb'
        }
        console.log(info);

        fs.writeFile('./info.txt', JSON.stringify(info,null, 2), error => {
            if(error){
                throw new Error ('Error escribiendo info txt')
            }else{
                console.log('Todo ok')
            }
        });
    }
})