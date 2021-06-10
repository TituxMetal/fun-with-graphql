const resolvers = {
  Query: {
    greeting: (_parent, args) => {
      const { name, position } = args

      return name && position
        ? `Hello ${name}! You are my favorite ${position}!`
        : 'Hello!'
    },
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
