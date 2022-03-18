const fs = require('fs');

async function readFile(){

    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
        console.log(contenido)

        const infoData = JSON.parse(contenido).contenidoObj;
        const info = {
            name: infoData.name,
            version: infoData.version,
            description: infoData.description,
            main: infoData.main,
            scripts: infoData.scripts,
            keywords: infoData.keywords,
            author: infoData.author,
            license: infoData.license
        }

        await fs.promises.writeFile('./nuevo.txt', JSON.stringify(info))

        console.log(info);
        info.author = 'Coderhouse';
        console.log(info); 

    } catch (error){
        console.log(error);
    }
}

readFile();