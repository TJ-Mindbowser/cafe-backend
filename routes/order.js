let express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.get('/', (req, res) => {
    Order.find({})
    .populate('customerId')
    .populate({
        path: 'products.productId'
    })
        .then((data) => {
            res.json({
                success: true,
                message: 'Order list fetched successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.get('/:id', (req, res) => {
    Order.findById(req.params.id)
    .populate('customerId')
        .then((data) => {
            res.json({
                success: true,
                message: 'Order Detail Feched Successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.post('/', (req, res) => {
    let data = req.body
    Order.create(data)
    .then(async ()=>{
        res.json({
            success: true,
            message: 'Order created successfully',
            data
        })
    })
    .catch((e)=>{
        console.log('error-----------', e)
    })

})

router.put('/:id', (req, res) => {
    let data = req.body
    let id = req.params.id
    Order.findByIdAndUpdate(id, data)
    .then(((data) => {
        res.json({
            success: true,
            message: 'Order updated successfully',
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

