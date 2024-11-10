import {
  integer,
  pgEnum,
  pgTable,
  real,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const plans = pgTable("plans", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  price: real("price").notNull(),
  duration: integer("duration").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const subscriptionsEnum = pgEnum("subscription_enum", [
  "ACTIVE",
  "EXPIRED",
]);

export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey().notNull(),
  planId: text("planId").references(() => plans.id),
  startDate: timestamp("startDate").defaultNow().notNull(),
  endDate: timestamp("endDate").defaultNow().notNull(),
  status: subscriptionsEnum("status").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const paymentStausEnum = pgEnum("payment_status_enum", [
  "PENDING",
  "FAILED",
  "SUCCESS",
]);
export const paymentMethodEnum = pgEnum("payment_method_enum", [
  "CREDIT_CARD",
  "DEBIT_CARD",
  "PAYPAL",
  "BANK_TRANSFER",
  "OTHER",
]);

export const payments = pgTable("payments", {
  id: text("id").primaryKey().notNull(),
  userId: text("userId").references(() => users.id),
  subscriptionId: text("subscriptionId").references(() => subscriptions.id),
  amount: real("amount").notNull(),
  paymentDate: timestamp("paymentDate").defaultNow(),
  paymentMethod: paymentMethodEnum("paymentMethod").notNull(),
  status: paymentStausEnum("status").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
