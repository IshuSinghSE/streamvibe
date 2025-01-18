import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from './db/drizzle';
import { users } from './db/schema/users';
import { eq } from 'drizzle-orm';
import { compare } from 'bcryptjs';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials): Promise<User> {
                try {
                    const user = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, credentials.email as string))
                        .limit(1);
                    if (user.length === 0) {
                        throw new Error('No user found');
                    }
                    const passwordMatch = await compare(
                        credentials.password as string,
                        user[0].password
                    );
                    if (!passwordMatch) {
                        throw new Error('Password does not match');
                    }
                    return {
                        id: user[0].id.toString(),
                        email: user[0].email.toString(),
                        fullname: user[0].fullName.toString()
                    } as User;
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        throw new Error(
                            `Invalid credentials, ${error.message}`
                        );
                    } else {
                        throw new Error('Invalid credentials');
                    }
                }
            }
        }),
        Google,
        Facebook
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id?.toString();
                token.email = user.email?.toString();
                token.emailVerified = user.emailVerified as
                    | (Date & false)
                    | (Date & true);
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.emailVerified = token.emailVerified as
                    | (Date & false)
                    | (Date & true);
            }
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },

    secret: process.env.AUTH_SECRET
});
