import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const watchHistory = pgTable("watch_history", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => users.id),
  movieId: text("movieId").references(() => movies.id),
  watchedAt: timestamp("watchedAt").defaultNow().notNull(),
  durationWatched: integer("durationWatched").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
