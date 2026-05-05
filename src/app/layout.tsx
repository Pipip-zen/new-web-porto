import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monochrome-experimentalist.dev"),
  title: {
    default: "Portofolio Website — Rafif Nuha",
    template: "%s — Rafif Nuha"
  },
  description: "A monochrome, editorial portfolio for Rafif Nuha — frontend developer and spatial web designer.",
  keywords: ["portfolio", "frontend developer", "design", "next.js", "monochrome"],
  openGraph: {
    title: "Rafif Nuha — Monochrome Experimentalist",
    description: "Monochrome editorial portfolio built with Next.js.",
    type: "website"
  }
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
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-surface text-on-surface">
        <Sidebar />
        <div className="min-h-screen lg:pl-[15rem]">
          <main className="min-h-screen border-l border-outline-variant">{children}</main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
