import { Router } from 'express'
import { getUsers, addUser, deleteUser } from '../controllers/user.js'
const router = Router()

router.get('/', (req, res) => {
    res.send('Esta es la ruta de prueba get')
})

router.get('/user', async (req, res) => {
    let users = await getUsers();
    res.send(users)
})

router.post('/user', (req, res) => {
    let user = req.body
    addUser(user)
    res.send(user)
})

router.post('/ex', (req, res) => {
    let body = req.body
    console.log(body)
    res.send(body)
})

//http://localhost:8080/api/ex2/5
router.get('/ex2/:id', (req, res) => {
    let id = req.params.id
    let usuario = getUser(id)

    res.send({ id })
})

router.delete('/user', (req, res) => {
    let user = req.body
    deleteUser(user)
    res.send({ "message:": "Deleted", ...user })
})

export default router;