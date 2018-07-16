const { buildSchema } = require('graphql')

module.exports = new buildSchema(`
  type Student {
    _id: Int!
    name: String!
    scores: [Scores]
  }

    type Scores{
        score: Float,
        type:String
    }

    type User{
      username: String!,
      password: String,
      first_name: String,
      second_name: String
    }
    type Cover{
      id: Int!,
      name: String
    }
  type Query {
    hello: String
    students: [Student]
    student(_id:Int!): [Student]
    users: [User]
    user(username:String!): [User]
    covers: [Cover]
  }

  `)
    //   type Mutation {
    //     addBook(title: String!, author: String!): Book!
    //     removeBook(title: String!): Book!
    //   }