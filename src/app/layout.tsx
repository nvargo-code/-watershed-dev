import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Watershed Development Group | Real Estate Development Consulting — Austin & DFW",
    template: "%s | Watershed Development Group",
  },
  description:
    "Watershed Development Group provides full-lifecycle real estate development consulting services in Austin, TX and the Dallas-Fort Worth metroplex. Feasibility, capital markets, entitlements, project management, and government incentive advisory.",
  keywords: [
    "real estate development consulting Austin TX",
    "real estate development consulting Dallas Fort Worth",
    "DFW real estate developer",
    "Austin development advisory",
    "capital markets real estate Texas",
    "TIF NMTC financing Austin",
    "multifamily development consulting",
    "commercial real estate development Texas",
    "Watershed Development Group",
    "Nathan Vargo developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Watershed Development Group",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
