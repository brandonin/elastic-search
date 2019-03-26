import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';

const resolvers = {
  Query: {
    info: () => `This is the API of an elastic-search project for Signafire`
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
