import { MongoClient, ServerApiVersion, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

if (!uri) throw new Error("❌ Missing MONGODB_URI");
if (!dbName) throw new Error("❌ Missing MONGODB_DB");

declare global {
  // Prevent TypeScript errors (reuse global)
  var _db: Db | undefined;
  var _mongoClient: MongoClient | undefined;
}

if (!global._db) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClient = client;

  // Connect immediately (top-level await alternative)
  const connection = await client.connect();
  global._db = connection.db(dbName);
}

const db: Db = global._db;
export default db;
