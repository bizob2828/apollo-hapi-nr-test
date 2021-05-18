'use strict'

const Hapi = require('@hapi/hapi')
const { ApolloServer } = require('apollo-server-hapi')
const typeDefs = require('./schema')
const AsteroidAPI = require('./asteroid')
const resolvers = require('./resolvers')

const HOST = 'localhost'
const PORT = 6000

async function StartServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      asteroidAPI: new AsteroidAPI(),
    }),
    context: () => {
      return {
        token: process.env.NASA_API_KEY
      }
    }
  })

  const app = new Hapi.server({
    host: HOST,
    port: PORT
  })

  await server.applyMiddleware({
    app: app,
    path: '/gql'
  })

  await server.installSubscriptionHandlers(app.listener)

  await app.start()

  console.log(`Server running at: ${app.info.uri}`)
}

StartServer().catch(error => console.log(error))
