import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DottedMap } from "@/components/ui/dotted-map";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section id="about" className="relative overflow-hidden pb-20 pt-24 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 h-full w-full lg:w-3/4 [mask-image:linear-gradient(to_left,black_10%,transparent_90%)]">
          <DottedMap
            dotColor="rgba(203,172,249,0.35)"
            dotRadius={0.22}
            mapSamples={7000}
            className="h-full w-full opacity-40"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/4 z-0 h-96 w-96 rounded-full bg-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10">
        <h1 className="heading">
          A little bit <span className="text-purple">about me</span>
        </h1>

        <BentoGrid className="mt-12">
          {gridItems.map((gridItem) => (
            <BentoGridItem key={gridItem.id} {...gridItem} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};