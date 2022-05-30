const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const combosSchema = new Schema({
    class: String,
    date: String,


})







module.exports = mongoose.model('Combo', combosSchema)