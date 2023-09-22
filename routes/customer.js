let express = require('express')
const router = express.Router()
const { getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer } = require('../controller/Customer')

router.get('/', async (req, res, next) => {
    try {
        let response = await getCustomers()
        res.json({
            success: true,
            data: response,
            message: 'Customers Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Customer.js:10 ~ router.get ~ error:", error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let response = await getCustomerById(req.params.id)
        res.json({
            success: true,
            data: response,
            message: 'Customer Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Customer.js:10 ~ router.get ~ error:", error)
    }

})

router.post('/', async (req, res) => {
    try {
        let data = req.body
        let response = await addCustomer(data)
        res.json({
            success: true,
            data: response,
            message: 'Customer Added successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Customer.js:10 ~ router.get ~ error:", error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let data = req.body
        let id = req.params.id
        let response = await updateCustomer(id, data)
        res.json({
            success: true,
            message: 'Customer updated successfully',
            data: {}
        })
    } catch (error) {
        console.log("🚀 ~ file: Customer.js:58 ~ router.get ~ error:", error)
    }
})

module.exports = router