"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema/users";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { CustomError } from "../CustomError";
import { signIn } from "@/auth";
import { AuthCredentials } from "@/types";

const signInWithEmailAndPassword = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      throw new CustomError("Sign in error", 400);
    }
    console.log(result, "Sign in success");
    return { success: true };
    
  } catch (error) {
    console.log(error, "Sign in error");
    throw new CustomError("Sign in error", 400);
  }
};

const signUp = async (params: AuthCredentials) => {
  const { email, password, fullName } = params;

  // Check if the email is already in use
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    throw new CustomError("Email already in use", 400);
  }

  //Hash the password
  const hashPassword = await hash(password, 10);

  // Create the user
  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashPassword,
    });
    console.log( "User created");
    // Sign in the user
    await signInWithEmailAndPassword({ email, password });
    return { success: true };
  } catch (error) {
    console.log(error, "Sign up error");
    return { error: "Sign up error" };
  }
};

export { signUp, signInWithEmailAndPassword };
