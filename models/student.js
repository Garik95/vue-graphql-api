const mongoose = require('mongoose')

// Mongoose Model
const studentSchema = new mongoose.Schema({
     _id: Number,
    name: String,
  scores: Array
})
var Student = mongoose.model('Student', studentSchema);
module.exports = Student;

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})
var User = mongoose.model('User', userSchema);
module.exports = User;

// Export Mongoose "Book" model
module.exports = {
    Student:studentSchema,
    User:userSchema
}