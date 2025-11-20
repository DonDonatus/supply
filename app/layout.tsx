import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCV Supply Chain Solutions | Optimizing Your Supply Chain for Tomorrow",
  description: "SCV delivers innovative supply chain solutions with confidence, clarity, and insight. We streamline operations, enhance efficiency, and drive growth in a rapidly changing world.",
  keywords: ["supply chain", "logistics", "optimization", "supply chain management", "consulting", "efficiency", "analytics"],
  authors: [{ name: "SCV Supply Chain Solutions" }],
  openGraph: {
    title: "SCV Supply Chain Solutions",
    description: "Optimizing Your Supply Chain for Tomorrow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
