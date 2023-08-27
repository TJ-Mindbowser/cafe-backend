const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./models')
const { config } = require('./config')
const {PORT} = config
const product = require('./routes/product')

app.use('/product',product)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})