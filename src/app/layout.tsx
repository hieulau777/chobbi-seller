import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SellerShell } from "../components/SellerShell";
import { QueryProvider } from "../providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chobbi Seller",
  description: "Seller portal for Chobbi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <QueryProvider>
        <SellerShell>{children}</SellerShell>
      </QueryProvider>
      </body>
    </html>
  );
}
