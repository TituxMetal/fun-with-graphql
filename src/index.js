import { graphQLSchema } from '#root/graphql'
import { shutdownServer } from '#root/helpers'

import createApp from './app'

const server = createApp(graphQLSchema)

shutdownServer(server)
