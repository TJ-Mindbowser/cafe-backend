// models/index.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { config } = require('../config')
const { MONGO_URI } = config
const mongoOptions = { useNewUrlParser: true }

const connect = () => mongoose.createConnection(MONGO_URI, mongoOptions);

const db = connect();
const models = {};
db.on('open', () => {
    console.log(`Mongoose connection open to ${JSON.stringify(MONGO_URI)}`);
    fs.readdirSync(__dirname)
        .filter(file => file !== 'index.js') // Exclude the index.js file itself
        .forEach(file => {
            const model = require(path.join(__dirname, file));
            models[model.modelName] = model;
        });
    return { db, models };
});
db.on('error', (err) => {
    console.log(`Mongoose connection error: ${err} with connection info ${JSON.stringify(MONGO_URI)}`);
    process.exit(0);
});

