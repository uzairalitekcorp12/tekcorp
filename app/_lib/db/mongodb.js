import "server-only";

import mongoose from "mongoose";


const CACHE_KEY =
  "__tekcorpMongooseCache";


function getCache() {
  if (!globalThis[CACHE_KEY]) {
    globalThis[CACHE_KEY] = {
      connection: null,
      promise: null,
    };
  }

  return globalThis[CACHE_KEY];
}


export default async function connectMongoDB() {
  const uri =
    (
      process.env.MONGODB_URI ||
      process.env.MONGO_URI
    )?.trim();

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not configured.",
    );
  }

  const cache = getCache();

  if (cache.connection) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 6000,
      })
      .then((instance) => instance)
      .catch((error) => {
        cache.promise = null;
        throw error;
      });
  }

  cache.connection = await cache.promise;

  return cache.connection;
}


/*
 * The TekCorp CMS collections were created independently from the legacy
 * Mongoose schemas in this repository. Exposing the native collection lets
 * the content adapters read those documents without coercing or mutating
 * their stored field names.
 */
export async function getMongoCollection(name) {
  const databaseName =
    typeof name === "string"
      ? name.trim()
      : "";

  if (!databaseName) {
    throw new TypeError(
      "getMongoCollection requires a collection name.",
    );
  }

  const mongooseInstance =
    await connectMongoDB();

  const database =
    mongooseInstance.connection.db;

  if (!database) {
    throw new Error(
      "MongoDB connected without an active database.",
    );
  }

  return database.collection(
    databaseName,
  );
}
