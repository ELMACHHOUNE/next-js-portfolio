import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { Footer } from "@/components/footer";
import { homeMetadata } from "@/config";
import { navItems } from "@/data";

// Lightweight hero stays eager for LCP
// Below-fold sections are code-split to cut TBT / unused JS on mobile
const Grid = dynamic(() => import("@/components/grid").then((m) => m.Grid), {
  loading: () => <div className="h-[400px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />,
});
const RecentProjects = dynamic(
  () => import("@/components/recent-projects").then((m) => m.RecentProjects),
  { loading: () => <div className="h-[400px] w-full animate-pulse rounded-2xl bg-white/[0.02]" /> }
);
const Clients = dynamic(() => import("@/components/clients").then((m) => m.Clients), {
  loading: () => <div className="h-[200px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />,
});
const Experience = dynamic(() => import("@/components/experience").then((m) => m.Experience), {
  loading: () => <div className="h-[300px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />,
});
const Approach = dynamic(() => import("@/components/approach").then((m) => m.Approach), {
  loading: () => <div className="h-[400px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />,
});

export const metadata: Metadata = homeMetadata;

const MainPage = () => {
  return (
    <main
      id="main-content"
      className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10"
    >
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
