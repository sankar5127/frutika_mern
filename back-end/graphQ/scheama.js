const { buildSchema } = require('graphql');

module.exports = buildSchema(` 
        type testData {
            first_name: String!
            useremail: String!
        }

        type test {
            id: Int!
        }

        input user {
            first_name: String!
            useremail: String!
        }

        input tag { 
            name: String!
        }

        type tagData {
            id: Int!
            name: String!
        }

        type RootQuery {
            users: [testData!]!
            user(id: ID!): testData! 
        }

        type RootMutation {
            createTag(tagInput: tag!): tagData!
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
`)