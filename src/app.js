import 'express-async-errors'
import { GraphQLServer } from 'graphql-yoga'

import { port } from '#root/config'
import { mainRoutes } from '#root/routes'

const createApp = (typeDefs, resolvers) => {
  const server = new GraphQLServer({ typeDefs, resolvers })
  const options = {
    port,
    endpoint: '/',
    subscriptions: '/',
    playground: '/graphql'
  }

  server.start(options, () =>
    console.info(`Server is listening on http://localhost:${port}`)
  )

  server.express.use('/', mainRoutes)

  return server
}

export default createApp
