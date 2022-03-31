
const express = require('express');
const { Router } = express;

const app = express();
const router = Router();

router.get('/recurso', (req, res) => {
    res.send('get ok!')
})

router.post('/recurso', (req, res) => {
    res.send('post ok!')
})

app.use('/api', router);
app.listen(8080)

/* 
npm init -y //Crea el package.json
npm i //instala package-lock.json para tener el node modules

npm install express //Instala express.js
npm install -g nodemon //Instala nodemon */