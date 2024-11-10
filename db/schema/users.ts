import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Define the enum for subscription types
export const subscriptionTypeEnum = pgEnum("subscription_type_enum", [
  "FREE",
  "STANDARD",
  "PREMIUM",
]);

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  // subscriptionType: subscriptionTypeEnum("subscriptionType").notNull(),
  // profilePictureUrl: text("profilePictureUrl"),
  // createdAt: timestamp("createdAt").defaultNow().notNull(),
  // updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
