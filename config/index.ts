import type { Metadata } from "next";

export const siteUrl = "https://elmachhoune.me";
export const siteUrlWww = "https://www.elmachhoune.me";

export const links = {
  sourceCode: "https://github.com/ELMACHHOUNE/next-js-portfolio",
  ownerName: "MOHAMED EL MACHHOUNE",
  ownerEmail: "business.elmachhoune@gmail.com",
  github: "https://github.com/ELMACHHOUNE",
  linkedin: "https://www.linkedin.com/in/mohamed-el-machhoune",
  twitter: "https://x.com/ELMACHHOUNE",
} as const;

// ── Shared keywords — cleaned, intent-focused (no UI library spam) ──
const baseKeywords = [
  "Mohamed EL MACHHOUNE",
  "Mohamed El Machhoune",
  "ELMACHHOUNE",
  "elmachhoune",
  "el machhoune mohamed",
  "mohamed-el-machhoune",
  "Freelance Full-Stack Developer Morocco",
  "Full Stack Developer Morocco",
  "MERN Stack Developer",
  "MERN Stack Developer Morocco",
  "Next.js Developer",
  "Next.js Developer Morocco",
  "React Developer Morocco",
  "Node.js Developer",
  "TypeScript Developer",
  "IT Instructor Morocco",
  "Software Engineer Morocco",
  "Freelance Software Engineer",
  "GoToDev",
  "GoToDev.ma",
  "MR Technologies",
  "Web Development Morocco",
  "Casablanca Developer",
  "Rabat Developer",
  "Morocco Tech Instructor",
  "Jadara Instructor",
  "ALX Instructor",
  "GoMyCode Instructor",
];

// ── Base site config — used as fallback (layout) ──
export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohamed EL MACHHOUNE — Full-Stack Developer | MERN & Next.js | Instructor & Consultant",
    template: "%s | Mohamed EL MACHHOUNE",
  },
  description:
    "Official portfolio of Mohamed EL MACHHOUNE — Freelance Full-Stack Developer (MERN, Next.js, Node.js, TypeScript) & IT Instructor in Morocco. Instructor at GMC School of Technology x Woolf, Jadara, ALX, GoMyCode & Technopark. Founder of GoToDev.ma.",
  keywords: baseKeywords,
  authors: [{ name: links.ownerName, url: links.github }],
  creator: links.ownerName,
  publisher: links.ownerName,
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  applicationName: `${links.ownerName} Portfolio`,
  generator: "Next.js",
  // Icons are also exported via app layout metadata, but keep for completeness
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
    shortcut: "/icon.png",
  },
  // Viewport & theme handled in layout export, keep lightweight here
  verification: {
    google: "qxvD8indgJ2C-TyDsWeAiiJSEX7fmf_Pw2C-4kcDGYQ",
    // add Bing/Yandex when available: other: { 'msvalidate.01': '...' }
  },
  alternates: {
    canonical: siteUrl,
    languages: { "en-US": siteUrl, "fr-MA": siteUrl },
  },
  openGraph: {
    title: "Mohamed EL MACHHOUNE — Full-Stack Developer | MERN & Next.js",
    description:
      "Freelance Full-Stack Developer & IT Instructor (MERN, Next.js, Node.js, TypeScript) — GMC x Woolf, Jadara, ALX, GoMyCode. Explore projects, teaching & achievements.",
    url: siteUrl,
    siteName: `${links.ownerName} — Portfolio`,
    images: [
      {
        url: "/elmachhoune.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed EL MACHHOUNE — Full-Stack Developer & Instructor — Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocale: ["fr_MA", "ar_MA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed EL MACHHOUNE — Full-Stack Developer | MERN & Next.js",
    description: "Portfolio — Full-Stack (MERN/Next.js) • Instructor (GMC, Jadara, ALX) • Founder GoToDev.ma • Morocco",
    creator: "@ELMACHHOUNE",
    site: "@ELMACHHOUNE",
    images: [`${siteUrl}/elmachhoune.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // No canonical here — set per page via alternates.canonical
} as const;

// ── Page-specific metadata ──
export const homeMetadata: Metadata = {
  title: "Mohamed EL MACHHOUNE — Full-Stack Developer | MERN, Next.js | Instructor & Consultant | Morocco",
  description:
    "Mohamed EL MACHHOUNE — Freelance Full-Stack Developer (MERN Stack: MongoDB, Express, React, Node.js, Next.js, TypeScript) & IT Instructor in Morocco. Instructor at GMC School of Technology x Woolf (MSc), Jadara Foundation, ALX Morocco, GoMyCode & HoussniJob Innovation. Founder of GoToDev.ma (MR Technologies). Based in Casablanca/Rabat — available for freelance & consulting.",
  keywords: [
    ...baseKeywords,
    "Full-Stack Developer Casablanca",
    "Full-Stack Developer Rabat",
    "Freelance MERN Developer Morocco",
    "Next.js Portfolio Morocco",
    "MERN Instructor Morocco",
    "Web Development Instructor Morocco",
    "MR Technologies Morocco",
    "Portfolio Mohamed El Machhoune",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Mohamed EL MACHHOUNE — Full-Stack Developer | MERN, Next.js | Morocco",
    description:
      "Freelance Full-Stack Engineer (MERN/Next.js) & Instructor — GMC x Woolf, Jadara, ALX, GoMyCode. Founder GoToDev.ma. Explore projects, experience & contact.",
    url: siteUrl,
    siteName: "Mohamed EL MACHHOUNE — Portfolio",
    images: [
      {
        url: "/elmachhoune.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed EL MACHHOUNE — Full-Stack Developer — Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed EL MACHHOUNE — Full-Stack Developer | Morocco",
    description: "MERN/Next.js • Instructor • Founder GoToDev.ma • Casablanca/Rabat • Freelance & Consulting",
    images: [`${siteUrl}/elmachhoune.jpg`],
  },
};

export const achievementsMetadata: Metadata = {
  title: "Achievements & Moments with Students — Awards, Hackathons, Teaching | Mohamed EL MACHHOUNE",
  description:
    "Achievements of Mohamed EL MACHHOUNE: Hack@UIT Winner (GoToDev & Syndinet), SMART REGION Winner (Green Thumb), Excellence Star (Ibn Tofail University) + 23+ Moments with Students & Professionals — workshops, bootcamps, jury & corporate AI training (ONSSA x Actway Consulting) at ENSA Khouribga, GIZ, Orange Digital Centers, ALX, Jadara, Nouaceur Wings Tech & Management Digital School.",
  keywords: [
    ...baseKeywords,
    "Achievements Mohamed EL MACHHOUNE",
    "Hack@UIT Winner",
    "SMART REGION Hackathon Winner",
    "Excellence Star Ibn Tofail University",
    "Moments with Students",
    "Teaching Portfolio Morocco",
    "GIZ Morocco Instructor",
    "Orange Digital Centers",
    "ALX Morocco",
    "Jadara Foundation",
    "Ensa Khouribga Open Source Days Jury",
    "ONSSA AI Training",
    "Actway Consulting AI Trainer",
    "AI Training Public Administration Morocco",
    "GoToDev Achievements",
  ],
  alternates: { canonical: `${siteUrl}/achivements` },
  openGraph: {
    title: "Achievements & Moments with Students | Mohamed EL MACHHOUNE",
    description:
      "Awards: Hack@UIT, SMART REGION, Excellence Star (UIT) + teaching & AI training moments — GIZ, Orange, ALX, Jadara, ENSA Khouribga, ONSSA x Actway, Technopark & more.",
    url: `${siteUrl}/achivements`,
    siteName: "Mohamed EL MACHHOUNE — Portfolio",
    images: [
      {
        url: "/hackathons/gotodev-sundiconnect.jpg",
        width: 1200,
        height: 630,
        alt: "Hack@UIT Winners — GoToDev & Syndinet — Achievements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements & Moments with Students | Mohamed EL MACHHOUNE",
    description: "Awards & 23+ teaching moments — Hackathons, workshops, jury — GIZ, Orange, ALX, Jadara...",
    images: [`${siteUrl}/hackathons/gotodev-sundiconnect.jpg`],
  },
};
