const models = require('./models/student')
var ObjectId = require('mongodb').ObjectID;

const resolvers = {
  users: async (args) =>{
      return (await models.User.find())
  },
  user: async (args) => {
      return (await models.User.find({"username":args.username}))
  },
  covers: async (args) => {
    return (await models.Cover.find())
  },
  card: async (args) => {
    return (await models.Card.find({"account":args.account}))
  },
  cards: async (args) => {
    return (await models.Card.aggregate([
      {$match:{"userid": ObjectId(args.userid)}},
      {
      $lookup:{
              from: "users",
              localField: "userid",
              foreignField: "_id",
              as: "users"
          }
  }])
  )
  }
//   addBook: async (args, context) => {
//     var newBook = new Book({
//       title: args.title,
//       author: args.author
//     })

//     var err = await newBook.save()

//     if (err) return err
//     return newBook
//   },
//   removeBook: async (args, context) => {
//     var doc = await Book.findOneAndRemove({
//       title: args.title
//     })

//     return doc
//   }
}

module.exports = resolvers