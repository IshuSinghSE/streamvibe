import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const liked_movies = pgTable("liked_movies", {
  id: text("id").primaryKey().notNull(),
  userId: text("userId").references(() => users.id),
  movieId: text("movieId").references(() => movies.id),
  likedAt: timestamp("likedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
