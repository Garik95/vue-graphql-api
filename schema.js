const { buildSchema } = require('graphql')

module.exports = new buildSchema(`
    type User{
      _id: [String],
      username: String!,
      password: String,
      first_name: String,
      second_name: String
    }

    type Cover{
      id: Int!,
      name: String
    }

    type Card{
      _id: String,
      userid: String,
      account: String!,
      sum: Float,
      state: Boolean,
      cover: String,
      users: [User]
    }

    type Query {
      hello: String
      users: [User]
      user(username:String!): [User]
      covers: [Cover]
      card(account:String!): [Card]
      cards(userid:String!): [Card]
    }

  `)
    //   type Mutation {
    //     addBook(title: String!, author: String!): Book!
    //     removeBook(title: String!): Book!
    //   }