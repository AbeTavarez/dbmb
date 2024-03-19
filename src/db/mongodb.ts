import { MongoClient, Db, Collection } from "mongodb";

let dbClient;

try {
  if (!process.env.MONGODB_URI) {
    throw new Error("Mongo Db URI is required!");
  }

  dbClient = new MongoClient(process.env.MONGODB_URI);
  dbClient.connect();
} catch (error) {
  console.log(error);
}

export default dbClient as MongoClient;
