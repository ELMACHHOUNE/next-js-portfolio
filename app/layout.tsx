import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Analytics } from '@vercel/analytics/next';

import { siteConfig } from "@/config";

import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png" />
        <link rel="canonical" href="https://www.elmachhoune.me/" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="qxvD8indgJ2C-TyDsWeAiiJSEX7fmf_Pw2C-4kcDGYQ" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MOHAMED EL MACHHOUNE",
              url: "https://www.elmachhoune.me/",
              author: {
                "@type": "Person",
                name: "MOHAMED EL MACHHOUNE",
                url: "https://github.com/ELMACHHOUNE/",
              },
              description:
                "Mohamed EL MACHHOUNE's portfolio showcasing full-stack development, UX/UI design, and consulting expertise.",
            }),
          }}
        ></script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
