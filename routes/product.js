let express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/', (req, res) => {
    Product.find({})
        .then((data) => {
            res.json({
                success: true,
                message: 'Product list fetched successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((data) => {
            res.json({
                success: true,
                message: 'Product Detail Feched Successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.post('/', (req, res) => {
    let data = req.body
    Product.create(data)
        .then(() => {
            res.json({
                success: true,
                message: 'Product Created Successfully',
                data
            })
        })
        .catch((e) => {
            res.json({
                success: false,
                message: e,
                data: {}
            })
        })
})

router.put('/:id', (req, res) => {
    let data = req.body
    let id = req.params.id
    Product.findByIdAndUpdate(id, data)
    .then(((data) => {
        res.json({
            success: true,
            message: 'Product updated successfully',
            data: {}
        })
    }))
    .catch((e)=>{
        res.json({
            success: false,
            message: e,
            data: {}
        })
    })
})

module.exports = router

