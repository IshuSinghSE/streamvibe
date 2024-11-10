import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const wishlists = pgTable("wishlists", {
  id: text("id").primaryKey().notNull(),
  userId: text("userId").references(() => users.id),
  movieid: text("id").references(() => movies.id),
  addedAt: timestamp().defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
