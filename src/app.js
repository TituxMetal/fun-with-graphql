import 'express-async-errors'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import expressPlayground from 'graphql-playground-middleware-express'

import { port } from '#root/config'
import { mainRoutes } from '#root/routes'

const createApp = graphQLSchema => {
  const app = express()

  app.use(express.json())
  app.use('/', mainRoutes)
  app.get('/graphql', expressPlayground({ endpoint: '/graphql' }))
  app.use(
    graphqlHTTP({
      schema: graphQLSchema,
      graphiql: false
    })
  )

  const server = app.listen(port, () =>
    console.info(`Server is listening on http://localhost:${port}`)
  )

  return server
}

export default createApp
