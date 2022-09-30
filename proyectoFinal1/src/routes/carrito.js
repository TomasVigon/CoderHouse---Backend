const express = require('express');
const router = express.Router();

const CarritoContainer = require('../controllers/CarritoContainer')
const carritoContainer = new CarritoContainer('./src/data/carrito.json')

const middleware = (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) return res.status(400).send({error: "Producto no encontrado"});
    if (!carritoContainer.getById(id).then(result => {return result})) return res.status(400).send({error: "Producto no encontrado"});
    next()
}

router.get('/:id/productos', middleware, (req, res) => {
    const id = parseInt(req.params.id);
    carritoContainer.getById(id).then(result => res.send(result))
})

router.post('/', (req, res) => {
    let singleProduct = req.body;
    carritoContainer.save(singleProduct).then(result => res.send(result))
})

router.post('/:id/productos/:id_prod', middleware, (req, res) => {
    const id = parseInt(req.params.id);
    const id_prod = parseInt(req.params.id_prod);
    carritoContainer.saveProduct(id, id_prod).then(result => res.send(result))
})

router.delete('/:id', middleware, (req, res) => {
    const id = parseInt(req.params.id);
    carritoContainer.deleteById(id).then(result => res.send(result))
})

router.delete('/:id/productos/:id_prod', middleware, (req, res) => {
    const id = parseInt(req.params.id);
    const id_prod = parseInt(req.params.id_prod);
    carritoContainer.deleteByProdId(id, id_prod).then(result => res.send(result))
})


module.exports = router;