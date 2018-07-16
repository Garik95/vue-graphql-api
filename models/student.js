const mongoose = require('mongoose')

// Mongoose Model
const studentSchema = new mongoose.Schema({
     _id: Number,
    name: String,
  scores: Array
})

// Export Mongoose "Book" model
module.exports = mongoose.model('Student', studentSchema)