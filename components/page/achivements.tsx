import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Achivements() {
  const testimonials = [    {
    quote:
      "Winners of the Hack@UIT Hackathon at Ibn Tofaïl University — GoToDev and Syndinet selected from 156 ideas, reached the final 16, and both crowned winners. Each team awarded MAD 10,000.",
    name: "GoToDev & Syndinet — Hack@UIT Winners",
    designation: "Ibn Tofaïl University — Kénitra (2024)",
    src: "https://media.licdn.com/dms/image/v2/D4D22AQGp8kBUp2GAOA/feedshare-shrink_1280/feedshare-shrink_1280/0/1721209893803?e=1762992000&v=beta&t=Wbiw4tot1y12457FUQLh5BQXQFiaP4P_f-RFw6kiF1o",
  },
    
    {
      quote:
        "Winner of the SMART REGION Hackathon with The Green Thumb — a smart solution for sustainable agriculture and green-space management.",
      name: "Winner of Hackathon SMART REGION",
      designation: "Private University of Fez (12-2024)",
      src: "https://media.licdn.com/dms/image/v2/D4E22AQFwi-cZvxt0hA/feedshare-shrink_1280/B4EZQccKs7GcAk-/0/1735643952009?e=1762992000&v=beta&t=fic2LzRDCr0Tx4obJk5FTUN5kOEcRZ40r2_8MTQ8wlU",
    },
    {
        quote:
          "Honored and grateful to have received, for the second consecutive year, an Excellence Star at the Ceremony of Excellence at Ibn Tofaïl University - Kénitra. ",
        name: "Excellence Star Award",
        designation: "Ibn Tofaïl University — Kénitra (07/2025)",
        src: "https://media.licdn.com/dms/image/v2/D4E22AQEcW3KiXPqwvg/feedshare-shrink_1280/B4EZgt3uU8HEAk-/0/1753116248330?e=1762992000&v=beta&t=N5a0NEci5mVvElQC831enXUPyeJqn2WYktsUVd1XGcE",
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




      
    </div>
  );
}
