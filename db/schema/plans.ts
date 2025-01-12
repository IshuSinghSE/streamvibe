import {
  integer,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const plans = pgTable("plans", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  name: text("name").notNull(),
  price: real("price").notNull(),
  duration: integer("duration").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// export const subscriptionsEnum = pgEnum("subscription_enum", [
//   "ACTIVE",
//   "EXPIRED",
// ]);

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  planId: uuid("plan_id").references(() => plans.id),
  startDate: timestamp("start_date").defaultNow().notNull(),
  endDate: timestamp("end_date").defaultNow().notNull(),
  status: text("status").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Remove redundant enum type definitions
// export const paymentStausEnum = pgEnum("payment_status_enum", [
//   "PENDING",
//   "FAILED",
//   "SUCCESS",
// ]);
// export const paymentMethodEnum = pgEnum("payment_method_enum", [
//   "CREDIT_CARD",
//   "DEBIT_CARD",
//   "PAYPAL",
//   "BANK_TRANSFER",
//   "OTHER",
// ]);

export const payments = pgTable("payments", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id").references(() => users.id), // Change text to uuid
  subscriptionId: uuid("subscription_id").references(() => subscriptions.id),
  amount: real("amount").notNull(),
  paymentDate: timestamp("payment_date").defaultNow(),
  paymentMethod: text("payment_method").notNull(), // Use text instead of enum
  status: text("status").notNull(), // Use text instead of enum
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
