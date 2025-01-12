import { integer, pgTable, real, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { movies } from "./movies";

export const reviews = pgTable("reviews", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id").references(() => users.id), // Change text to uuid
  movieId: uuid("movie_id").references(() => movies.id),
  reviewText: text("reviewText").notNull(),
  rating: real("rating"),
  helpfulCount: integer("helpfulCount"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
