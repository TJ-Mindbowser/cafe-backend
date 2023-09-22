let express = require('express')
const router = express.Router()
const { getProducts,
    getProductById,
    addProduct,
    updateProduct } = require('../controller/Product')

router.get('/', async (req, res, next) => {
    try {
        let response = await getProducts()
        res.json({
            success: true,
            data: response,
            message: 'Products Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Product.js:10 ~ router.get ~ error:", error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let response = await getProductById(req.params.id)
        res.json({
            success: true,
            data: response,
            message: 'Product Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Product.js:10 ~ router.get ~ error:", error)
    }

})

router.post('/', async (req, res) => {
    try {
        let data = req.body
        let response = await addProduct(data)
        res.json({
            success: true,
            data: response,
            message: 'Product Added successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: Product.js:10 ~ router.get ~ error:", error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let data = req.body
        let id = req.params.id
        let response = await updateProduct(id, data)
        res.json({
            success: true,
            message: 'Product updated successfully',
            data: {}
        })
    } catch (error) {
        console.log("🚀 ~ file: Product.js:58 ~ router.get ~ error:", error)
    }
})

module.exports = router