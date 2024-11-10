import { drizzle } from "drizzle-orm/neon-serverless";

// const sql = neon(process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set");
} else {
  console.log("Connecting to database with URL:", "neonDB");
}

export const db = drizzle(process.env.DATABASE_URL!);
