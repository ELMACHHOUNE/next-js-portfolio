import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig, siteUrl, links } from "@/config";

import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...siteConfig,
  // Next.js will merge per-page metadata; keep base here
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: links.ownerName,
    alternateName: ["ELMACHHOUNE", "Mohamed El Machhoune", "Elmachooune"],
    url: siteUrl,
    image: `${siteUrl}/profiles/elmachhoune.jpg`,
    jobTitle: "Full-Stack Developer & IT Instructor",
    description:
      "Freelance Full-Stack Developer (MERN, Next.js, TypeScript) & IT Instructor — GMC School of Technology x Woolf, Jadara Foundation, ALX Morocco, GoMyCode.",
    email: links.ownerEmail,
    sameAs: [
      links.github,
      links.linkedin,
      "https://elmachhoune.me",
      "https://www.elmachhoune.me",
      "https://gotodev.ma",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "MERN Stack",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Teaching",
      "Freelancing",
    ],
    worksFor: { "@type": "Organization", name: "GoToDev.ma (MR Technologies)" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Ibn Tofail University" },
    address: { "@type": "PostalAddress", addressCountry: "MA", addressLocality: "Casablanca" },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${links.ownerName} — Portfolio`,
    url: siteUrl,
    inLanguage: "en-US",
    author: { "@type": "Person", name: links.ownerName },
    description: siteConfig.description as string,
    publisher: { "@type": "Person", name: links.ownerName },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Achievements", item: `${siteUrl}/achivements` },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-[9999] rounded-full border border-white/20 bg-black px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:outline-none focus:ring-2 focus:ring-purple"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>

        {/* Structured Data — no manual meta tags; Next handles viewport/canonical/robots via Metadata API */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </body>
    </html>
  );
}
