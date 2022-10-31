const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Events {
    _id: ID
    eventName: String
    description: String
    dateAndTime: Date
    location: String
    numberPlayersNeeded: Int
    organizerNames: []
}

type User {
    _id: ID
    username: String
    email: String
    phone: Number
    events: [Events]
  }

type Auth {
    token: ID
    user: User
  }

type Query {
    events: [Events]
    user: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addEvent(_id:ID!, eventName: String!, description: String!, dateAndTime: Date!, location: String!, numberPlayersNeeded: Int!, organizerNames: [String]): Events
    updateEvent(_id:ID!, eventName: String!, description: String!, dateAndTime: Date!, location: String!, numberPlayersNeeded: Int!, organizerNames: [String]): Events
    deleteEvent(_id:ID!): Events
  }
`

module.exports = typeDefs;