import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/app/components/layout/Scroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fxmbed",
  description: "Your own discord user app featuring over 30+ commands.",
  keywords: ["discord", "bot", "user app", "commands", "utility"],
  icons: {
    icon: "/assets/img/logo.png",
    shortcut: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
  openGraph: {
    title: "fxmbed",
    description: "Your own discord user app featuring over 30+ commands.",
    url: "https://fxmbed.vercel.app",
    siteName: "fxmbed",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 1200,
        height: 630,
        alt: "fxmbed logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fxmbed",
    description: "Your own discord user app featuring over 30+ commands.",
    images: ["/assets/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased min-h-full flex flex-col`}>
          <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
