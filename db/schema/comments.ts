import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const comments = pgTable("comments", {
  id: text("id").primaryKey().notNull(),
  userId: text("userId").references(() => users.id),
  movieId: text("movieId").references(() => movies.id),
  commentText: text("commentText").notNull(),
  likes: integer("likes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
