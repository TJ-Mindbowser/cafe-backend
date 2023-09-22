const Product = require('../models/Product')

/**
 * API to fetch Product
 * @returns 
 */
const getProducts = () => {
    return Product.find({})
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to fetch Product by Id
 * @returns 
 */
const getProductById = (productId) => {
    return Product.findById(productId)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to add Product
 * @returns 
 */
const addProduct = (data) => {
    Product.create(data)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to update Product
 * @returns 
 */
const updateProduct = (id, data) => {
    Product.findByIdAndUpdate(id, data)
        .then(() => {
            return true
        })
        .catch((e) => {
            throw new Error(e)
        })
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct
}