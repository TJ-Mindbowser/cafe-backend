const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./models')
const { config } = require('./config')
const {PORT} = config
const product = require('./routes/product')
const customer = require('./routes/customer')
const order = require('./routes/order')
const category = require('./routes/category')

app.use('/product',product)
app.use('/customer',customer)
app.use('/order',order)
app.use('/category',category)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})