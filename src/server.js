import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import Query from './resolvers/Query';

const resolvers = {
  Query,
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
