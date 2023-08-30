// models/index.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { config } = require('../config')
const { MONGO_URI } = config
const mongoOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

const connect = () => mongoose.connect(MONGO_URI, mongoOptions);

connect().then(()=>{
    console.log('Connection success')
})
.catch((e)=>{
    console.log('error----------',e)
})