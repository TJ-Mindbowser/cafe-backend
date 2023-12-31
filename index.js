const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./models')
const { config } = require('./config')
const { PORT } = config
const product = require('./routes/product')
const customer = require('./routes/customer')
const category = require('./routes/category')

app.use('/product', product)
app.use('/customer', customer)
app.use('/category', category)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})