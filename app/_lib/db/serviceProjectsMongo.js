import mongoose from "mongoose";

let serviceProjectConnectionPromise = null;

export default async function connectServiceProjectsDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    "";

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not configured for Service Projects.",
    );
  }

  if (!serviceProjectConnectionPromise) {
    serviceProjectConnectionPromise =
      mongoose.connect(uri, {
        bufferCommands: false,
      });
  }

  await serviceProjectConnectionPromise;

  return mongoose.connection;
}
