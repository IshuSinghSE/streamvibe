import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "/assets/fonts/GeistVF.woff", // Corrected path
//   variable: "--font-geist-sans",
//   weight: "100 900",
//   display: "swap",
// });

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
