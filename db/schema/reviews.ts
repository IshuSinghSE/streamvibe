import { integer, pgTable, real, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const reviews = pgTable("reviews", {
  id: text("id").primaryKey().notNull(),
  userId: text("userId").references(() => users.id),
  movieId: text("movieId").references(() => movies.id),
  reviewText: text("reviewText").notNull(),
  rating: real("rating"),
  helpfulCount: integer("helpfulCount"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
