import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BestzDealAi - AI-Powered Reverse Marketplace",
  description: "Post what you want, get competitive offers from sellers. AI-powered deal ranking for the best value. You post it. They deal it.",
  keywords: "marketplace, deals, AI, reverse marketplace, best prices, competitive offers, smart shopping",
  authors: [{ name: "BestzDealAi Team" }],
  creator: "BestzDealAi",
  publisher: "BestzDealAi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bestzdealai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BestzDealAi - AI-Powered Reverse Marketplace",
    description: "Post what you want, get competitive offers from sellers. AI-powered deal ranking for the best value.",
    url: "https://bestzdealai.vercel.app",
    siteName: "BestzDealAi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestzDealAi - The deal comes to you",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestzDealAi - AI-Powered Reverse Marketplace",
    description: "Post what you want, get competitive offers from sellers. AI-powered deal ranking for the best value.",
    images: ["/og-image.jpg"],
    creator: "@bestzdealai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-dark-bg text-light-text overflow-x-hidden`}
      >
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
