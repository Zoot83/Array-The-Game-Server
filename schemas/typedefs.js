const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    bragboards: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBragBoard(userApi: String!): User
  }
`;

module.exports = typeDefs;
