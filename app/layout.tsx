import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The SEND Tech Company – Technology for Inclusive Education",
  description: "The SEND Tech Company builds powerful, accessible tools that help schools, families, and professionals support every child to thrive. Discover SEN-AI, Lighthouse Consultancy, and Leif.",
  keywords: ["education technology", "SEN", "SEND", "inclusive education", "curriculum", "intervention", "parent app", "consultancy", "SEN-AI", "Lighthouse Consultancy", "Leif", "SENCO", "special educational needs"],
  authors: [{ name: "The SEND Tech Company" }],
  creator: "The SEND Tech Company",
  publisher: "The SEND Tech Company",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sendtechcompany.com",
    title: "The SEND Tech Company – Technology for Inclusive Education",
    description: "The SEND Tech Company builds powerful, accessible tools that help schools, families, and professionals support every child to thrive.",
    siteName: "The SEND Tech Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "The SEND Tech Company – Technology for Inclusive Education",
    description: "The SEND Tech Company builds powerful, accessible tools that help schools, families, and professionals support every child to thrive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
