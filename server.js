const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

// Types
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

// Resolvers
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const startApolloServer = async function () {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(4000, () => {
    console.log('GraphQL server is running on 4000');
  });
};

startApolloServer();
