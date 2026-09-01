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
      <section className="mb-10">
        <div className="flex items-center gap-4">
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
          <h1 className="text-center text-3xl font-semibold text-white sm:text-4xl">
            Achivements & Experience
          </h1>
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
        </div>
        <div className="mt-2 mx-auto h-px w-32 bg-neutral-700/60 sm:hidden" />

        <div className="mt-3 flex items-center gap-4">
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
          <p className="text-center text-sm text-neutral-300 sm:text-base max-w-2xl mx-auto px-2">
            Highlights of impact, milestones, and hands-on experience.
          </p>
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
        </div>
        <div className="mt-2 mx-auto h-px w-40 bg-neutral-800/50 sm:hidden" />
      </section>

      <AnimatedTestimonials testimonials={testimonials} />

      {/* Students section */}
      <section className="mt-16">
        <div className="flex items-center gap-4">
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
            Moments with Students
          </h2>
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-700/60" />
        </div>
        <div className="mt-2 mx-auto h-px w-28 bg-neutral-700/60 sm:hidden" />
        <div className="mt-3 flex items-center gap-4">
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
          <p className="text-center text-sm text-neutral-300 sm:text-base max-w-2xl mx-auto px-2">
            Workshops, hackathons, and coaching snapshots.
          </p>
          <div aria-hidden className="hidden sm:block h-px flex-1 bg-neutral-800/50" />
        </div>
        <div className="mt-2 mx-auto h-px w-36 bg-neutral-800/50 sm:hidden" />

        <StudentsGallery />
      </section>
    </div>
  );
}
