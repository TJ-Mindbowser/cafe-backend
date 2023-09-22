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
/**
 * API to fetch category by Id
 * @returns 
 */
const getCategoryById = () => {
    Category.findById(req.params.id)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to add categories
 * @returns 
 */
const addCategory = (data) => {
    Category.create(data)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to update categories
 * @returns 
 */
const updateCategory = (id,data) => {
    Category.findByIdAndUpdate(id, data)
    .then(()=>{
        return true
    })
    .catch((e) => {
        throw new Error(e)
    })
}

module.exports = {
    getCategories,
    getCategoryById,
    addCategory,
    updateCategory
}