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
  type Query {
    hello: String
    students: [Student]
    student(_id:Int!): [Student]
  }

  `)
    //   type Mutation {
    //     addBook(title: String!, author: String!): Book!
    //     removeBook(title: String!): Book!
    //   }