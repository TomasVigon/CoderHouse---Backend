const express = require('express');
const router = express.Router();

let products = require('../models/product.model')

const getLastId = () => {
    if(products.length === 0) return 0;
    return products[products.length-1].id
}

const getProduct = (id) => {
    // pongo solo dos '==' porque puede venir como str o num 
    return products.find(prod => prod.id == id)
}

const middleware = (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) return res.status(400).send({error: "Producto no encontrado"});
    if (!getProduct(id)) return res.status(400).send({error: "Producto no encontrado"});
    next()
}

router.get('/', (req, res) => {
    // res.send({ products })
    res.render('products', {
        products
    })
})

router.get('/:id', middleware, (req, res) => {
    const id = req.params.id;
    res.send({ product: getProduct(id) });
})

router.post('/', (req, res) => {
    let singleProduct = req.body;
    console.log(singleProduct);
    singleProduct.id = getLastId() + 1;
    products.push(singleProduct);
    // res.send({ product: getProduct(singleProduct.id) });  
    res.redirect('/')
})

router.put('/:id', middleware, (req, res) => {
    const id = req.params.id;
    let singleProduct = req.body;
    singleProduct.id = parseInt(id);
    products[products.indexOf(getProduct(id))] = singleProduct;
    res.send({ product: products[products.indexOf(singleProduct)] }); 
})

router.delete('/:id', middleware, (req, res) => {
    const id = req.params.id;
    products.splice(products.indexOf(getProduct(id)), 1);
    res.send({ products }); 
})

module.exports = router;