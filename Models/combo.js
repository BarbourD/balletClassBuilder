const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const combosSchema = new Schema({
    lesson: String,
    date: String,
    album: String,
    track: String,
    combo: String,
    description: String,
})







module.exports = mongoose.model('Combo', combosSchema)