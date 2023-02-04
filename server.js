const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { ApolloServer } = require('apollo-server-express');

const typesArray = loadFilesSync('**/*', { extensions: ['resolvers.js']});
const typeSchema = loadFilesSync('**/*', { extensions: ['graphql']});

const startApolloServer = async () => {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: typeSchema,
        resolvers: typesArray
    });

    const server = new ApolloServer({
        schema
    });

    await server.start()
    server.applyMiddleware({app, path: '/graphql'});

    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
    console.log(`Server up and running on port`, PORT);
    });
}

startApolloServer();
