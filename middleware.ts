// import { auth } from "@/auth";
import { NextResponse } from 'next/server';
import { auth } from './auth';

const apiAuthPrefix = '/api/auth';
const publicRoutes = ['/','/signup', '/signin', '/subscription'];


export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

    if (isApiRoutes) {
        return NextResponse.next();
    }

    if (isPublicRoutes) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoutes) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    return NextResponse.next();
});


// export async function middleware(req: NextRequest) {
//     // Add your own middleware here
//     const token = await getToken({ req, secret: process.env.AUTH_SECRET });
//     const url = req.nextUrl;

//     if (token) {
//         if (
//             url.pathname.startsWith('/signup') ||
//             url.pathname.startsWith('/signin') ||
//             url.pathname === '/'
//         ) {
//             return NextResponse.redirect(new URL('/dashboard', req.url));
//         }
//     } else {
//         if (url.pathname === '/dashboard') {
//             return NextResponse.redirect(new URL('/signin', req.url));
//         }
//     }
//     return NextResponse.next();
// }

// the path matcher is used to determine which paths should be handled by the middleware
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
        '/',
    ]
};
