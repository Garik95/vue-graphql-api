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
    _id: Array,
    username: String,
    password: String,
    first_name: String,
    second_name: String
})
var User = mongoose.model('User', userSchema);
module.exports = User;

const coverSchema = new mongoose.Schema({
    id: Number,
    name: String
})

var Cover = mongoose.model('Cover', coverSchema);

const cardSchema = new mongoose.Schema({
    _id: Array,
    userid: String,
    account: String,
    sum: Number,
    state: Boolean,
    cover: String
})

var Card = mongoose.model('Card',cardSchema);
// Export Mongoose "Book" model
module.exports = {
    Student:Student,
    User:User,
    Cover:Cover,
    Card:Card
}