import {
  pgTable,
  integer,
  text,
  boolean,
  real,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const movies = pgTable("movies", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  genre: text("genre")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  releaseDate: text("releaseDate"),
  director: text("director")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  cast: text("cast")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  language: text("language")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  music: text("music")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  releasedYear: integer("releasedYear"),
  likes: integer("likes"),
  length: integer("length"),
  streamUrl: text("streamUrl"),
  isSeries: boolean("isSeries"),
  description: text("description"),
  rating: real("rating"),
  posterUrl: text("posterUrl"),
  trailerUrl: text("trailerUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const seasons = pgTable("seasons", {
  id: text("id").primaryKey(),
  movieId: text("movieId").references(() => movies.id),
  seasonNumber: integer("seasonNumber").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  releaseDate: text("releaseDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const episodes = pgTable("episodes", {
  id: text("id").primaryKey(),
  seasonId: text("seasonId").references(() => seasons.id),
  episodeNumber: integer("episodeNumber").notNull(),
  title: text("title").notNull(),
  length: integer("length"),
  releaseDate: timestamp("releaseDate"),
  description: text("description"),
  likes: integer("likes"),
  streamUrl: text("streamUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
