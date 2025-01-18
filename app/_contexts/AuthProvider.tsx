'use client';
import { SessionProvider, useSession } from "next-auth/react";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <InnerAuthProvider>{children}</InnerAuthProvider>
        </SessionProvider>
    );
}

function InnerAuthProvider({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
