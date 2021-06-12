import { getAllAndPopulate, getByKey } from '#root/collections'

const resolvers = {
  Query: {
    posts: async (_parent, _args, _context, _info) =>
      getAllAndPopulate('posts', 'author', 'users'),
    users: async (_parent, _args, _context, _info) => getByKey('users'),
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
