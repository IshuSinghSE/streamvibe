import "next-auth";
import { DefaultSession } from "next-auth";

interface User {
    id: string;
    email: string;
    fullname: string;
    profilePictureUrl?: string;
    subscriptionType: "FREE" | "STANDARD" | "PREMIUM";
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
}

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            email?: string;
            emailVerified: boolean;
        } & DefaultSession["user"];
    }
    interface User {
        id: string;
        email: string;
        fullname: string;
        profilePictureUrl?: string;
        subscriptionType: "FREE" | "STANDARD" | "PREMIUM";
        emailVerified: boolean;
        createdAt: string;
        updatedAt: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        email?: string;
        emailVerified: boolean;
    }
}
