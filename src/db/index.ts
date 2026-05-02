import "server-only";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

dotenv.config({ path: ".env.development" });
dotenv.config();

const connectionString =
  process.env.NEON_DB_CONNECTION_STRING ?? process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "Missing NEON_DB_CONNECTION_STRING (or DATABASE_URL) in environment variables.",
  );
}

const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });

export { schema };