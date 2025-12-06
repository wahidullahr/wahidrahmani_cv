import type { Metadata } from "next";

import { Inter } from "next/font/google"; // Best readable sans-serif

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {

  title: "Your Name | Software Engineer",

  description: "Senior-level Full Stack Engineer specializing in scalable architecture.",

  // These are critical for when your link is shared on Slack/Teams

  openGraph: {

    title: "Your Name | Software Engineer",

    description: "Building scalable web applications.",

    type: "website",

  },

};

export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en" className="scroll-smooth">

      <body className={`${inter.variable} font-sans antialiased leading-relaxed selection:bg-emerald-500/20`}>

        {/* We wrap content to prevent 4k monitors stretching text too wide */}

        <main className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">

          {children}

        </main>

      </body>

    </html>

  );

}
