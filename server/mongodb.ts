import dotenv from "dotenv";
dotenv.config();
import { Db, MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

let connectionURL: string | undefined = process.env.MONGO_URL;

let mongodb;

export const getMongodb = async () => {
  try {
    if (!connectionURL) {
      // if connetionURL is undefined This will create an new instance of "MongoMemoryServer" and automatically start it
      const mongod = await MongoMemoryServer.create();

      connectionURL = mongod.getUri();
    }

    const client: { db: () => Db } = await MongoClient.connect(
      connectionURL as string
    );

    mongodb = client.db();

    return mongodb;
  } catch (error) {
    return error;
  }
};

// The Server can be stopped again with
// await mongod.stop();
