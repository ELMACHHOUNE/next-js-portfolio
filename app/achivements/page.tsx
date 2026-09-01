import type { Metadata } from "next";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import { Achivements } from "@/components/page/achivements";
import { achievementsMetadata, siteUrl } from "@/config";

export const metadata: Metadata = achievementsMetadata;

export default function AchivementsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Achievements & Moments with Students — Mohamed EL MACHHOUNE",
    description:
      "Awards: Hack@UIT, SMART REGION, Excellence Star (Ibn Tofail University) + 23+ Moments with Students — workshops, bootcamps & jury across Morocco.",
    url: `${siteUrl}/achivements`,
    isPartOf: { "@type": "WebSite", name: "Mohamed EL MACHHOUNE — Portfolio", url: siteUrl },
    about: { "@type": "Person", name: "Mohamed EL MACHHOUNE" },
    inLanguage: "en-US",
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
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-start overflow-clip bg-black-100 px-5 py-10 sm:px-10">
      <FloatingNav navItems={navItems} />
      <div className="w-full py-20 max-w-7xl">
        <Achivements />
      </div>

      <h1 className="sr-only">Achievements & Moments with Students — Mohamed EL MACHHOUNE — Awards Hackathons Teaching Morocco</h1>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  );
}
