import express from 'express'

const app = express()
const routerMascotas = express.Router()
const routerPersonas = express.Router()

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

routerMascotas.use(express.json())
routerPersonas.use(express.json())

/* --------------------------------------------------------------- */
/* Mascotas */
const mascotas = []

routerMascotas.get('/listar', (req, res) => {
    res.json(mascotas)
})

//postman -> localhost:8080api/mascotas/guardar
routerMascotas.post('/guardar', (req, res) =>{
    mascotas.push(req.body)
    res.json(req.body)
})

/* --------------------------------------------------------------- */
/* Personas */
const personas = []

routerPersonas.get('/listar', (req,res) => {
    res.json(personas)
})

routerPersonas.post('/guardar', (req, res) => {
    personas.push(req.body)
    res.json(req.body)
})

routerPersonas.put('/modificar/:nombre', (req, res) => {
    let nom = req.params.nombre    
    let persona = personas.find(personas => persona.nombre === nom)
})

routerPersonas.put('/modificar/:id', (req, res) => {

    let { nombre, nombreNuevo } = req.body
    let idPersona = req.params.id
    let persona = buscarPersona(idPersona)

    if( persona.nombre === nombre ){ 
        persona.nombre = nombreNuevo
    }

})

/* --------------------------------------------------------------- */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))