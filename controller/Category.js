const Category = require('../models/Category')

/**
 * API to fetch categories
 * @returns 
 */
const getCategories = () => {
    return Category.find({})
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}

module.exports = {
    getCategories
}