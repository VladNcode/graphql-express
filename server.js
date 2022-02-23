const express = require('express');
const path = require('path');
// const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const app = express();

// Types
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
// Resolvers
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

// Endpoints
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(4000, () => {
  console.log('GraphQL server is running on 4000');
});
