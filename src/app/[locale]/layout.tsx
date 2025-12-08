import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://wahid-portfolio.com'),
  title: {
    default: "Wahid Rahmani | Software Engineer | AI & Machine Learning Specialist",
    template: "%s | Wahid Rahmani"
  },
  description: "Software Engineer with a Master's in Machine Learning. Expert in building intelligent, scalable systems using Python, React, TypeScript, and Kotlin. Specializing in AI/ML applications and full-stack development.",
  keywords: [
    "Software Engineer",
    "AI Specialist",
    "Machine Learning",
    "Python Developer",
    "React Developer",
    "TypeScript",
    "Kotlin",
    "Full Stack Developer",
    "AI/ML Specialist",
    "Next.js",
    "Agile Development",
    "Software Development",
    "Web Development",
    "Mobile Development",
    "Artificial Intelligence"
  ],
  authors: [{ name: "Wahid Rahmani" }],
  creator: "Wahid Rahmani",
  publisher: "Wahid Rahmani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["nb_NO"],
    url: "https://wahid-portfolio.com",
    siteName: "Wahid Rahmani Portfolio",
    title: "Wahid Rahmani | Software Engineer | AI & Machine Learning Specialist",
    description: "Building intelligent, scalable systems bridging AI algorithms and user-friendly applications. Expert in Python, React, TypeScript, and Kotlin.",
    images: [
      {
        url: "/og-image.jpg", // You should add this image to public folder
        width: 1200,
        height: 630,
        alt: "Wahid Rahmani - Software Engineer & AI/ML Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahid Rahmani | Software Engineer | AI & Machine Learning Specialist",
    description: "Building intelligent, scalable systems bridging AI algorithms and user-friendly applications.",
    images: ["/og-image.jpg"], // You should add this image to public folder
    creator: "@wahidrahmani", // Update with your actual Twitter handle if available
  },
  alternates: {
    canonical: "https://wahid-portfolio.com",
    languages: {
      'en': 'https://wahid-portfolio.com/en',
      'no': 'https://wahid-portfolio.com/no',
    },
  },
  category: "technology",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased leading-relaxed selection:bg-primary/20`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

