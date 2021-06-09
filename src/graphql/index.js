export const typeDefs = `
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

export const resolvers = {
  Query: {
    me: () => ({
      id: 'abc123',
      name: 'Titux',
      email: 'titux@yep.com',
      age: 42
    }),
    post: () => ({
      id: 'abc456',
      title: 'New Post',
      body: 'Content of the new post',
      published: true
    })
  }
}
