import { makeExecutableSchema } from '@graphql-tools/schema'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default executableSchema
