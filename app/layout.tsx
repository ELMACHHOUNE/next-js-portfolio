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

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png" />
        <link rel="canonical" href="https://www.elmachhoune.me/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
