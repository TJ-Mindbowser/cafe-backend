let express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        success: true,
        message: 'Product List',
        data: []
    })
})

router.post('/',(req,res)=>{
    let data = req.body
    console.log("🚀 ~ file: product.js:14 ~ router.post ~ data:", data)
})

module.exports = router

