const typeDefs = `
  type Query {
    me: User!
    post: Post!
  }

  type Post {
    id: String!
    title: String!
    body: String!
    published: Boolean!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`

export default typeDefs
