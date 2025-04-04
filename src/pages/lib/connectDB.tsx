import mongoose, { Mongoose } from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

// Use the global variable with the defined type
let cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null } = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL , opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;