const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.set('views', './views')

//view datos
app.get('/', (req, res) => {
  res.render('datos', {
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  })
})

//view champion
app.get('/champion', (req, res) => {
  let champions = [
    { nombre: "kartus", lane: "Mid", ap: 359, ad: 55},
    { nombre: "Jayce", lane: "Top", ap: 122, ad: 199},
    { nombre: "Lux", lane: "Mid", ap: 11145, ad: 55},
    { nombre: "Evelyn", lane: "Jungle", ap: 3, ad: 353},
    { nombre: "Caitlyn", lane: "Adc", ap: 15, ad: 353}]

  res.render('champion', { champions })
})



app.listen(8080, () => {
  console.log(`Server running on port: 8080`)
})

//node src/main.js