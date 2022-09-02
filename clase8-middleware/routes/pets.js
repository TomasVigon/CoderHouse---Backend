const express = require('express');
const router = express.Router();

const pets = []

router.get('/', (req, res) => {
    res.send("hola desde la ruta pets");
})

router.get('/vip', (req, res) => {
    res.send("soy muuuy graande");
})

router.post('/', (req, res) => {
    let pet = req.body
    pets.push(pet)
    res.send({ message: "User created!" , pets: pets})
})

module.exports = router;