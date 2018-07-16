const models = require('./models/student')

const resolvers = {
  hello: (args, context) => {
    return context.greeting
  },
  students: async (args, context) => {
    return (await models.Student.find())
  },
  student: async(args,context) => {
    return (await Student.find({"_id":args._id}))
  },
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
    return (await models.Cards.find({"account":args.account}))
  },
  cards: async (args) => {
    return (await models.Cards.find({"userid":args.userid}))
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