const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    title: String
    about: String
    contacts: String
    fullname: String
    nb:String
    students:[Student]
    events:[Event]
  }
  type Student {
    studentname:String
    userId: String
  }
  type Event {
    userId:String
    day:String
    start:String
    end: String
    student:String
    comment:String
  }
type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(title: String, about: String, contacts: String, fullname: String, nb: String): User
     addStudent(userId: ID!, studentname: String!): User
     deleteStudent(userId: ID!, studentname: String!): User
     addEvent(userId: ID!, day: String! start: String! end: String! student: String! comment: String): User
     deleteEvent(userId: ID!, day: String! start: String! end: String! student: String! comment: String): User
  
  }
  `;

module.exports = typeDefs;