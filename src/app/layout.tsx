import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ? `[Preview] - ` : ``
}Gemstone Genomics`;

export const metadata: Metadata = {
  title: title,
  description: "Gemstone Genomics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" && (
          <div className="preview">Preview</div>
        )}
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
