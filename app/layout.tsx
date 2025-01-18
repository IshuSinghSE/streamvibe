import type { Metadata } from "next";
import { Manrope, Righteous } from "next/font/google";
import "./globals.css";
// import AuthProvider from "./_contexts/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "./_contexts/ThemeProvider";
import AuthProvider from "./_contexts/AuthProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
const manrope = Manrope({
    weight: ["400", "500", "600", "700"],
    variable: "--font-manrope",
    subsets: ["latin"],
});

const righteous = Righteous({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-righteous",
});

export const metadata: Metadata = {
    title: "StreamVibe",
    description: "Your ultimate video streaming experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/brand/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/brand/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/brand/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <AuthProvider>
            <body
                className={`${manrope.variable ?? ""} ${
                    righteous.variable ?? ""
                }`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                   
                >
                    <main className="relative min-h-screen max-w-screen-2xl flex flex-col">
                        <Header />
                        {children}
                        <Footer />
                        <SpeedInsights />
                        <Analytics />
                    </main>
                </ThemeProvider>
            </body>
            </AuthProvider>
        </html>
    );
}
