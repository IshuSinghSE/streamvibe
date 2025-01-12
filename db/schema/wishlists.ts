import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const wishlists = pgTable("wishlists", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id").references(() => users.id),
  movieid: uuid("id").references(() => movies.id),
  addedAt: timestamp().defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
