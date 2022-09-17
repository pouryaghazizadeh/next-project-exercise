const { gql } = require("apollo-server-express");

const jsCommentsSchema = gql`
  type Comment {
    id: ID!
    userName: String!
    comment: String!
  }

  
  type Query {
    allComments: [Comment!]!
    Comments(id: ID!):  Comments!
  }
`;
module.exports = { jsCommentsSchema};
