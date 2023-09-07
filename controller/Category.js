const Category = require('../models/Category')

const getCategories = () => {
    return Category.find({})
        .then((data) => {
            res.json({
                success: true,
                message: 'Category list fetched successfully',
                data
            })
        })
        .catch((e) => {
            console.log('error-----------', e)
        })
}

module.exports = {
    getCategories
}