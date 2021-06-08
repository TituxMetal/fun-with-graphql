import { typeDefs, resolvers } from '#root/graphql'
import { shutdownServer } from '#root/helpers'

import createApp from './app'

const server = createApp(typeDefs, resolvers)

shutdownServer(server)
