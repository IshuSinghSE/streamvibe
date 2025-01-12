import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set");
} else {
  console.log("🟢 Connecting to database with URL:", "neonDB");
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
