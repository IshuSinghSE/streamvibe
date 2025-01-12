import {
  pgTable,
  integer,
  text,
  boolean,
  real,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const movies = pgTable("movies", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
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
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const seasons = pgTable("seasons", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  movieId: uuid("movie_id").references(() => movies.id),
  seasonNumber: integer("seasonNumber").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  releaseDate: text("releaseDate"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const episodes = pgTable("episodes", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  seasonId: uuid("season_id").references(() => seasons.id),
  episodeNumber: integer("episodeNumber").notNull(),
  title: text("title").notNull(),
  length: integer("length"),
  releaseDate: timestamp("releaseDate"),
  description: text("description"),
  likes: integer("likes"),
  streamUrl: text("streamUrl"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
