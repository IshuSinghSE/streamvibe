CREATE TABLE "genres" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "genres_id_unique" UNIQUE("id"),
	CONSTRAINT "genres_name_unique" UNIQUE("name")
);
