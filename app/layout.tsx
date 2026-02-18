import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Eventiverich | Premium Event Management",
  description:
    "Eventiverich is a luxury event management company specializing in weddings, engagements, corporate events, birthdays, and bespoke celebrations. Let us create unforgettable experiences for you.",
  keywords: [
    "event management",
    "wedding planning",
    "luxury events",
    "corporate events",
    "event decoration",
  ],
  openGraph: {
    title: "Eventiverich | Premium Event Management",
    description: "Creating unforgettable luxury events and celebrations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ScrollToTop />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
