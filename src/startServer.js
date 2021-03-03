import 'dotenv/config';

import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server';

function startServer({ typeDefs, resolvers }) {

  const url = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  const server = new ApolloServer({typeDefs, resolvers});
  server.listen().then(({ url }) => console.log(`✅ Server started at ${url} ⚫⚫⚫`));

}

export default startServer;