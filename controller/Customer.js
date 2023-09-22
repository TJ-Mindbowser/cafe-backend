const Customer = require('../models/Customer')

/**
 * API to fetch Customer
 * @returns 
 */
const getCustomers = () => {
    return Customer.find({})
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to fetch Customer by Id
 * @returns 
 */
const getCustomerById = (CustomerId) => {
    return Customer.findById(CustomerId)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to add Customer
 * @returns 
 */
const addCustomer = (data) => {
    Customer.create(data)
        .then((data) => {
            return data
        })
        .catch((e) => {
            throw new Error(e)
        })
}
/**
 * API to update Customer
 * @returns 
 */
const updateCustomer = (id, data) => {
    Customer.findByIdAndUpdate(id, data)
        .then(() => {
            return true
        })
        .catch((e) => {
            throw new Error(e)
        })
}

module.exports = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer
}