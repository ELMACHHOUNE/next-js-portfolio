import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import { Achivements } from "@/components/page/achivements";

export default function AchivementsPage() {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-start overflow-clip bg-black-100 px-5 py-10 sm:px-10">
      <FloatingNav navItems={navItems} />
      <div className="w-full py-20 max-w-7xl">
        <Achivements />
      </div>
    </main>
  );
}
