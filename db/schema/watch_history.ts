import { integer, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const watchHistory = pgTable("watch_history", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id").references(() => users.id),
  movieId: uuid("movie_id").references(() => movies.id),
  watchedAt: timestamp("watchedAt").defaultNow().notNull(),
  durationWatched: integer("durationWatched").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
