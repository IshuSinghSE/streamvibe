import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const liked_movies = pgTable("liked_movies", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique().unique(),
  userId: uuid("user_id").references(() => users.id), // Change text to uuid
  movieId: uuid("movie_id").references(() => movies.id),
  likedAt: timestamp("likedAt").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
