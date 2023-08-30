let express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

router.get('/', (req, res) => {
    Customer.find({})
        .then((data) => {
            res.json({
                success: true,
                message: 'Customer list fetched successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.get('/:id', (req, res) => {
    Customer.findById(req.params.id)
        .then((data) => {
            res.json({
                success: true,
                message: 'Customer Detail Feched Successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.post('/', (req, res) => {
    let data = req.body
    Customer.create(data)
        .then(() => {
            res.json({
                success: true,
                message: 'Customer Created Successfully',
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
    Customer.findByIdAndUpdate(id, data)
    .then(((data) => {
        res.json({
            success: true,
            message: 'Customer updated successfully',
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

