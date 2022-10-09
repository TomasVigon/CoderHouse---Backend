const express = require('express')
const router = express.Router()
const options = require('../options/mysql.config')

const Manager = require('../controllers/product.manager')
const manager = new Manager(options, 'productsTable')

router.get('/', (req, res) => {
    manager.findAll().then(result => res.send(result))
})

router.get('/:id', (req, res) => {
    manager.findById(req.params.id)
        .then(result => {
            if (!(Array.isArray(result) && result.length)) return res.send({error: 'Product was not found'})
            res.send(result)
        })
    
})

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    manager.create(req.body).then(result => res.send(result))
})

router.put('/:id', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    manager.update(req.params.id, req.body)
        .then(result => {
            if (!(Array.isArray(result) && result.length)) return res.send({error: 'product was not found'})
            res.send(result)
        })
    
})

router.delete('/:id', (req, res) => {
    manager.delete(req.params.id).then(result => res.send(result))
})

module.exports = router