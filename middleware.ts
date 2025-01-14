// import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    // Add your own middleware here
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    const url = req.nextUrl;

    if (token) {
        if (url.pathname.startsWith("/signup") || url.pathname.startsWith("/signin")|| url.pathname === "/") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    } else {
        if (url.pathname === "/dashboard") {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
    return NextResponse.next();
}

// the path matcher is used to determine which paths should be handled by the middleware
export const config = {
    matcher: [
        // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
        "/signup/:path*",
        "/signin/:path*",
        // "/",
    ],
};
