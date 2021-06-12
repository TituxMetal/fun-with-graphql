const typeDefs = `
  type Query {
    posts: [Post!]!
    users: [User!]!
    me: User!
    post: Post!
  }

  type Post {
    id: String!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`

export default typeDefs
