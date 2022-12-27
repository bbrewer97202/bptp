import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

export const createGraphQLServer = async () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const plugins = [];
  if (!isProduction) {
    plugins.push(ApolloServerPluginLandingPageGraphQLPlayground());
  }
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins,
    cache: "bounded",
    introspection: !!isProduction,
  });
  await server.start();
  return server;
};
