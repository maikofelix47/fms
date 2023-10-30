"use client";
import "./globals.css";
import NextAuthProvider from "./context/next-auth-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
