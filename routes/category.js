let express = require('express')
const router = express.Router()
const Category = require('../models/Category')
const { getCategories } = require('../controller/Category')

router.get('/', async (req, res,next) => {
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

router.get('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then((data) => {
            res.json({
                success: true,
                message: 'Category Detail Feched Successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
})

router.post('/', (req, res) => {
    let data = req.body
    Category.create(data)
        .then(() => {
            res.json({
                success: true,
                message: 'Category Created Successfully',
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
    Category.findByIdAndUpdate(id, data)
        .then(((data) => {
            res.json({
                success: true,
                message: 'Category updated successfully',
                data: {}
            })
        }))
        .catch((e) => {
            res.json({
                success: false,
                message: e,
                data: {}
            })
        })
})

module.exports = router

