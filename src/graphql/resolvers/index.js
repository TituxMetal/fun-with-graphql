const resolvers = {
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
export default resolvers
