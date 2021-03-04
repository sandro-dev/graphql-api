import 'dotenv/config';
import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {

  const url = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub }});
  server.listen().then(({ url }) => console.log(`✅ Server started at ${url} ⚫⚫⚫`));

}

export default startServer;