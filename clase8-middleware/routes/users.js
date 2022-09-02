const express = require('express');
const router = express.Router();

const users = []

const middlewareCoder = (req, res, next) => {
    //aqui se hacen las validaciones
    next()  //continua a lo siguinete, en este caso el send de users
}

//se hace lo mismo que se hacia antes por cada ruta
//en este caso localhost/users/
//primero ejecuto el middleware y luego el resto
router.get('/', middlewareCoder, (req, res) => {
    res.send({users});
})

//en este caso localhost/users/vip
router.get('/vip', (req, res) => {
    res.send("soy graande");
})

// localhost/users
router.post('/', (req, res) => {
    let user = req.body
    users.push(user)
    res.send({ message: "User created!" , users: users})
})

module.exports = router;