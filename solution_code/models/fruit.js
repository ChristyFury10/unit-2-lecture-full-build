const { mongoose } = require('../db/connection');

const fruitsSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
}, {timestamps: true})

// give name of fruit to db
const Fruit = mongoose.model('Fruit', fruitsSchema)

module.exports = Fruit