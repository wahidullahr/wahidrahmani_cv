import type { Metadata } from "next";

import { Inter } from "next/font/google"; // Best readable sans-serif

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {

  title: "Wahid Rahmani | Software Engineer | AI & Machine Learning Specialist",

  description: "Software Engineer with a Master's in Machine Learning. Expert in building intelligent, scalable systems using Python, React, and Kotlin.",

  // These are critical for when your link is shared on Slack/Teams

  openGraph: {

    title: "Wahid Rahmani | Software Engineer | AI & Machine Learning Specialist",

    description: "Building intelligent, scalable systems bridging AI algorithms and user-friendly applications.",

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

        {children}

      </body>

    </html>

  );

}
