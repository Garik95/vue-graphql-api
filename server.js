const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const host = process.env.IP;
const port = process.env.port || 3000;

// Import GraphQL components
const schema = require('./schema')
const resolvers = require('./resolver')

// Import configuration and connect to DB
const { dbURL, dbName } = require('./config')
mongoose.connect(dbURL + '/' + dbName)

// Set up Express server
const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port);
console.log('Running a GraphQL API server at localhost:' + port + '/graphql')