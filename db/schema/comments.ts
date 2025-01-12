import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const comments = pgTable("comments", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique().unique(),
  userId: uuid("user_id").references(() => users.id), // Change text to uuid
  movieId: uuid("movie_id").references(() => movies.id),
  commentText: text("commentText").notNull(),
  likes: integer("likes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
