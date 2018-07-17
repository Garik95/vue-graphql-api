const mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// Mongoose Model
// User schema
const userSchema = new mongoose.Schema({
    _id: Array,
    username: String,
    password: String,
    first_name: String,
    second_name: String
})
var User = mongoose.model('User', userSchema);
module.exports = User;

// Cover schema
const coverSchema = new mongoose.Schema({
    id: Number,
    name: String
})

var Cover = mongoose.model('Cover', coverSchema);

// Card schema
const cardSchema = new mongoose.Schema({
    _id: Array,
    userid: {type: ObjectId, ref: 'userSchema'},
    account: String,
    sum: Number,
    state: Boolean,
    cover: String
})

var Card = mongoose.model('Card',cardSchema);

// Export Mongoose models
module.exports = {
    User:User,
    Cover:Cover,
    Card:Card
}