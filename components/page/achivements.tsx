import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { StudentsGallery } from "./students-gallery";

export function Achivements() {
  const testimonials = [    {
    quote:
      "Winners of the Hack@UIT Hackathon at Ibn Tofaïl University — GoToDev and Syndinet selected from 156 ideas, reached the final 16, and both crowned winners. Each team awarded MAD 10,000.",
    name: "GoToDev & Syndinet — Hack@UIT Winners",
    designation: "Ibn Tofaïl University — Kénitra (2024)",
    src: "/hackathons/gotodev-sundiconnect.jpg",
  },
    
    {
      quote:
        "Winner of the SMART REGION Hackathon with The Green Thumb — a smart solution for sustainable agriculture and green-space management.",
      name: "Winner of Hackathon SMART REGION",
      designation: "Private University of Fez (12-2024)",
      src: "/hackathons/smart-region-hackathon.jpg",
    },
    {
        quote:
          "Honored and grateful to have received, for the second consecutive year, an Excellence Star at the Ceremony of Excellence at Ibn Tofaïl University - Kénitra. ",
        name: "Excellence Star Award",
        designation: "Ibn Tofaïl University — Kénitra (07/2025)",
        src: "/hackathons/second-star.jpg",
      },
  ];

  return (
    <div id="achivements" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-10" aria-labelledby="achievements-heading">
        <div className="flex items-center gap-4">
          <div aria-hidden="true" className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
          <h1 id="achievements-heading" className="text-center text-3xl font-semibold text-white sm:text-4xl">
            Achivements & Experience
          </h1>
          <div aria-hidden="true" className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
        </div>
        <div className="mt-2 mx-auto h-px w-32 bg-neutral-700/60 sm:hidden" aria-hidden="true" />

        <div className="mt-3 flex items-center gap-4">
          <div aria-hidden="true" className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
          <p className="text-center text-sm text-neutral-300 sm:text-base max-w-2xl mx-auto px-2">
            Highlights of impact, milestones, and hands-on experience.
          </p>
          <div aria-hidden="true" className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
        </div>
        <div className="mt-2 mx-auto h-px w-40 bg-neutral-800/50 sm:hidden" aria-hidden="true" />
      </section>

      <AnimatedTestimonials testimonials={testimonials} />

      {/* Students section — Expert IT Dev restyle */}
      <section className="relative mt-20 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm" aria-labelledby="moments-heading">
        {/* glow like Grid section */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-purple/10 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white_10%,transparent_80%)]" />

        <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-purple animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-300">EXPERT • INSTRUCTOR • MENTOR</span>
            </div>
            <h2 id="moments-heading" className="heading !mb-3 text-3xl sm:text-4xl lg:text-5xl">
              Moments <span className="text-purple">with Students</span>
            </h2>
            <p className="mx-auto max-w-2xl font-mono text-xs tracking-wide text-neutral-400 sm:text-sm">
              <span aria-hidden="true" className="text-purple/80">{"//"}</span> Workshops, hackathons & coaching — building Full-Stack, AI & career-ready talent
            </p>
            <div aria-hidden="true" className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-purple/40 to-transparent" />
          </div>

          <div className="mt-8">
            <StudentsGallery />
          </div>
        </div>
      </section>
    </div>
  );
}
