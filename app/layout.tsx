import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nareswara | Adversarial Engineer",
  description: "Muhammad Dzikri Pandu Nareswara — Adversarial Researcher, and Secure Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${GeistSans.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
