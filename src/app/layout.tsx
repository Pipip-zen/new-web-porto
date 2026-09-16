import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { TopHeader } from "@/components/layout/TopHeader";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafifnuha.my.id"),
  title: {
    default: "Rafif Nuha — Fullstack Developer",
    template: "%s — Rafif Nuha"
  },
  description: "Digital products and interfaces that feel intuitive, perform seamlessly, and leave a lasting impression.",
  keywords: ["portfolio", "fullstack developer", "design", "next.js", "react", "monochrome"],
  applicationName: "Rafif Nuha Portfolio",
  authors: [{ name: "Rafif Nuha" }],
  creator: "Rafif Nuha",
  publisher: "Rafif Nuha",
  category: "portfolio"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-white`}>
      <body className="bg-black text-white antialiased font-mono min-h-screen flex flex-col justify-between">
        <div>
          <TopHeader />
          <main className="mx-auto max-w-7xl px-6 lg:px-12">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
