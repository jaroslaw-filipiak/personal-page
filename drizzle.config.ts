import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config();

const connectionString =
  process.env.NEON_DB_CONNECTION_STRING ?? process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "Missing NEON_DB_CONNECTION_STRING (or DATABASE_URL) in environment variables.",
  );
}

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
  verbose: true,
  strict: true,
});