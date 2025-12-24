import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Changed from Geist to Inter/Roboto due to build error
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans", // Keeping variable name same to avoid refactoring css
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono", // Keeping variable name same to avoid refactoring css
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bluora - Premium Alkaline Water",
    template: "%s | Bluora - Premium Alkaline Water",
  },
  description: "Experience the purity of Bluora. Premium alkaline packaged drinking water sourced from pristine environments. Hydrate with the power of pure life.",
  keywords: ["Premium Water", "Alkaline Water", "Bluora", "Luxury Water", "Hydration", "Mineral Water", "Pure Water", "Health Drink", "Natural Spring Water"],
  authors: [{ name: "Bluora" }],
  creator: "Bluora",
  publisher: "Bluora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bluora - Premium Alkaline Water",
    description: "Experience the purity of Bluora. Premium alkaline packaged drinking water sourced from pristine environments.",
    url: baseUrl,
    siteName: "Bluora",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg', // Ensure this exists or fallback to a default
        width: 1200,
        height: 630,
        alt: 'Bluora Premium Water',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluora - Premium Alkaline Water",
    description: "Experience the purity of Bluora. Premium alkaline packaged drinking water.",
    images: ["/og-image.jpg"], // Ensure this exists
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import AuthProvider from "../components/AuthProvider";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <CartDrawer />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
