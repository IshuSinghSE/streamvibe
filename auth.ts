import NextAuth from "next-auth";
import { db } from "./db/drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
