const express = require('express')
const bodyparser = require('body-parser')
const router = require('./routes/index.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(express.static('public'))
app.use(bodyparser.json())

const server = app.listen(8080, () => {
    console.log(`Server running on port: ${server.address().port}`)
})
server.on('error', error => console.log(`Error running server: ${error}`))
