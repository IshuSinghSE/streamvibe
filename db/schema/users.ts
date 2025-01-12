import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

// Define the enum for subscription types
// export const subscriptionTypeEnum = pgEnum("subscription_type_enum", [
//   "FREE",
//   "STANDARD",
//   "PREMIUM",
// ]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  subscriptionType: text("subscription_type").default("basic").notNull(),
  profilePictureUrl: text("profile_picture_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
