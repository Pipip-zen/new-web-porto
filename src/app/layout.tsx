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
  metadataBase: new URL("https://rafifnuha.my.id"),
  title: {
    default: "Portfolio - Muhammad Rafif Nuha Daniswara",
    template: "%s - Muhammad Rafif Nuha Daniswara"
  },
  description: "Monochrome portfolio of Muhammad Rafif Nuha Daniswara, frontend developer and spatial web designer based in Surabaya.",
  keywords: ["portfolio", "frontend developer", "design", "next.js", "monochrome"],
  applicationName: "Rafif Nuha Portfolio",
  authors: [{ name: "Muhammad Rafif Nuha Daniswara" }],
  creator: "Muhammad Rafif Nuha Daniswara",
  publisher: "Muhammad Rafif Nuha Daniswara",
  category: "portfolio",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Muhammad Rafif Nuha Daniswara - Portfolio",
    description: "Monochrome editorial portfolio for frontend development, digital product design, and spatial web work.",
    url: "/",
    siteName: "Rafif Nuha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rafif Nuha Portfolio logo"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Muhammad Rafif Nuha Daniswara - Portfolio",
    description: "Monochrome editorial portfolio for frontend development, digital product design, and spatial web work.",
    images: ["/logo.png"]
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
