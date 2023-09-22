let express = require('express')
const router = express.Router()
const { getCategories,
    getCategoryById,
    addCategory,
    updateCategory } = require('../controller/Category')

router.get('/', async (req, res, next) => {
    try {
        let response = await getCategories()
        res.json({
            success: true,
            data: response,
            message: 'Categories Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: category.js:10 ~ router.get ~ error:", error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let response = await getCategoryById(req.params.id)
        res.json({
            success: true,
            data: response,
            message: 'Category Fetched successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: category.js:10 ~ router.get ~ error:", error)
    }

})

router.post('/', async (req, res) => {
    try {
        let data = req.body
        let response = await addCategory(data)
        res.json({
            success: true,
            data: response,
            message: 'Category Added successfully'
        })
    } catch (error) {
        console.log("🚀 ~ file: category.js:10 ~ router.get ~ error:", error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let data = req.body
        let id = req.params.id
        let response = await updateCategory(id, data)
        res.json({
            success: true,
            message: 'Category updated successfully',
            data: {}
        })
    } catch (error) {
        console.log("🚀 ~ file: category.js:58 ~ router.get ~ error:", error)
    }
})

module.exports = router