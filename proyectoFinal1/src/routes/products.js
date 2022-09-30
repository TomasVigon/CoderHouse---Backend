const express = require('express');
const router = express.Router();

const ProductsContainer = require('../controllers/ProductsContainer')
const productsContainer = new ProductsContainer('./src/data/products.json')

let isAdmin = true

const middleware = (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) return res.status(400).send({error: "Producto no encontrado"});
    if (!productsContainer.getById(id).then(result => {return result})) return res.status(400).send({error: "Producto no encontrado"});
    next()
}

router.get('/', (req, res) => {
    productsContainer.getAll().then(result => res.send(result))
})

router.get('/:id', middleware, (req, res) => {
    const id = parseInt(req.params.id);
    productsContainer.getById(id).then(result => res.send(result))
})

if(isAdmin){
    router.post('/', (req, res) => {
        let singleProduct = req.body;
        productsContainer.save(singleProduct).then(result => res.send(result))
    })

    router.put('/:id', middleware, (req, res) => {
        const id = parseInt(req.params.id);
        let singleProduct = req.body;
        productsContainer.update(id, singleProduct).then(result => res.send(result))
    })
    
    router.delete('/:id', middleware, (req, res) => {
        const id = parseInt(req.params.id);
        productsContainer.deleteById(id).then(result => res.send(result))
    })
} else {
    router.delete('/:id', (req, res) => {
        res.send({error: -1, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no autorizada`})
    })
    router.put('/:id', (req, res) => {
        res.send({error: -1, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no autorizada`})
    })
    router.post('/', (req, res) => {
        res.send({error: -1, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no autorizada`})
    })
}

module.exports = router;