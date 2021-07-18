const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    _id: ID!
    content: String
    image: Image
    postedBy: User 
  }
  type PostInfo {
    posts: [Post!]
    page: Int
    pages: Int
    total: Int
  }
  # input type
  input PostCreateInput {
    content: String!
    image: ImageInput
  }
  type Query {
    postShow(id: ID!): Post!
    allPosts(limit: Int, page: Int, search: String): PostInfo!
    postsByUser(limit: Int, page: Int, search: String): PostInfo!
  }
  # mutations
  type Mutation {
    postCreate(input: PostCreateInput!): Post!
    postUpdate(id: ID!, input: PostCreateInput!): Post!
    postDelete(id: ID!): Post!
  }
`;
