"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";

type StudentCard = {
  category: string;
  title: string;
  src: string;
  href?: string;
  description: string;
};

const studentCards: StudentCard[] = [
  {
    category: "Consulting",
    title: "AI Training for ONSSA Staff — Actway Consulting",
    src: "/achivements/onssa-actway.png",
    href: "https://lnkd.in/p/ej6TdpT8",
    description:
      "Oct 20–21, 2026 — 2-day Artificial Intelligence training for the staff of ONSSA (National Office for Food Safety), Regional Directorate of Tangier–Tetouan–Al Hoceima. AI in public administration: practical tools, productivity & responsible adoption — as AI Trainer & Consultant with Actway Consulting.",
  },
  {
    category: "Students",
    title: "Graduation Demo Day — JADARA × Nouaceur Wings Tech × INDH — Full Stack MERN",
    src: "/achivements/indh-nouaceur-wings-tech.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-graduation-activity-7491219489578049536-BH2Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Demo Day after 6 months — JADARA × Nouaceur Wings Tech × INDH — Full Stack MERN: HTML/CSS/Tailwind, JS (ES6+), React, Node/Express, MongoDB, Git/GitHub & AI tools. Teams presented to jury.",
  },
  {
    category: "Students",
    title: "PFA & PFE Jury — Management Digital School",
    src: "/achivements/digital-management-school.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_managementdigitalschool-elmachhoune-gotodev-activity-7473374771796398080-s5KL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Jul 10, 2026 — Trainer & jury for PFA & PFE defenses with 1st & 2nd year Développement Informatique at Management Digital School — with Issam EL JAOUHARI.",
  },
  {
    category: "Students",
    title: "Graduation & Jury — GON Wings Tech School — Guelmim Oued Noun",
    src: "/achivements/gon-wings-tech.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-jadara-activity-7429516853183459328-7EaJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Feb 14, 2026 — 4 months as Freelance Full Stack Instructor & Jury at GON Wings Tech School — Guelmim Oued Noun × JADARA × ALX Morocco × Région Guelmim-Oued Noun.",
  },
  {
    category: "Hackathon",
    title: "Jury & Workshop Speaker — Open Source Days 14.0 — ENSA Khouribga",
    src: "/achivements/open-source-hackathon.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-elmachhoune-gotodev-activity-7429470217078104064-loH9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Feb 9–10, 2026 — Jury & Workshop Speaker at Open Source Days 14.0 — ENSA Khouribga, invited by GOMYCODE. Hackathon, conferences & workshops with 1337 vibes.",
  },
  {
    category: "Workshop",
    title: "Knowledge Exchange — Full-Stack × Digital Marketing — Nouaceur Wings Tech",
    src: "/achivements/digital-marketing-jadara.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_nouaceurwingstech-jadarafoundation-fullstackdevelopment-activity-7422981836533882881-GmQE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "3-day exchange at Nouaceur Wings Tech × JADARA with Omar Riad — 30 students: Digital Marketing → portfolios (HTML/CSS/JS, AI & no-AI) on GitHub & Vercel; Full-Stack → Personal Branding.",
  },
  {
    category: "Workshop",
    title: "From Learner to Leader — ALX Morocco",
    src: "/achivements/alx-workshop.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_softwareengineering-freelancing-techleadership-activity-7403777074014089216-rbhU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Dec 7, 2025 — “From Learner to Leader: My Journey as a Freelance Software Engineer” at ALX Morocco — invited by El Mehdi HACHAMI, ALX Ventures.",
  },
  {
    category: "Event",
    title: "Closing Ceremony — Orange Digital Centers x GIZ Morocco",
    src: "/achivements/odc-giz.png",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_ceremony-activity-7403818902180311040-JnJ4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Nov 17, 2025 — Speaker at closing ceremony of Training Digital Skills — 3 years of impact by GIZ × Orange: 12,773 beneficiaries (47% women), 1,248 jobs in Morocco.",
  },
  {
    category: "Students",
    title: "MERN Stack Bootcamp — Nouaceur Wings Tech",
    src: "/achivements/nwt-jadara-gomycode.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gotodev-nouaceurwingstech-activity-7351641652945469441-aHjd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "Mentored Software Developer Bootcamp by Nouaceur Wings Tech × Jadara × GoMyCode × INDH & local authorities in Nouaceur.",
  },
  {
    category: "Students",
    title: "Web Development Workshop — Casablanca Technopark",
    src: "/achivements/omnia-school.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formation-giz-aezducation-activity-7325933368330579968-l0Jx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description:
      "May 5, 2025 — GIZ Morocco × HoussniJob Innovation — training for 1st-year OMNIA School of Business and Technology at Technopark.",
  },
  {
    category: "Students",
    title: "Final Project Defense — JADARA x GoMyCode Bootcamp",
    src: "/achivements/women-coders.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_bootcamp-soutenance-womenintech-activity-7319298728769589248-aLWW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Students completed software development training under JADARA Foundation × GoMyCode.",
  },
  {
    category: "Students",
    title: "Full Stack Development Training — Casablanca Technopark",
    src: "/achivements/consultation-giz.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-fullstackdevelopment-activity-7311437787017166850-HeXI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "3-day Full Stack workshop at Technopark Casablanca (MITC) with HoussniJob Innovation.",
  },
  {
    category: "Students",
    title: "Frontend Development Training — Casablanca Technopark",
    src: "/achivements/technopark-houssnijob.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-frontenddevelopment-activity-7309263103639126017-8328?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "4-day Frontend workshop at Technopark Casablanca (MITC) with HoussniJob Innovation.",
  },
  {
    category: "Students",
    title: "Professional Training — Technopark Casablanca",
    src: "/achivements/giz-technopark-houssnijob.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formateur-formationprofessionnelle-alternance-activity-7303540364945051650-CPyf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Intensive professional training at Technopark Casablanca with HoussniJob Innovation — Tamheen by GIZ Morocco.",
  },
  {
    category: "Event",
    title: "GoToDev.ma at the Professional Excellence Forum — Ibn Tofail University",
    src: "/achivements/job-fair-forum.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_uitjobfair-hackathon-innovation-activity-7272358479766466560-M5Dg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Dec 4–5, 2024 — Represented GoToDev.ma at UIT Job Fair after winning Hack@UIT.",
  },
  {
    category: "Students",
    title: "MERN Stack Consultation — Casablanca",
    src: "/achivements/consultation-efet.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formation-mernstack-fullstackjs-activity-7203496109959229440-3Nij?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "6-day MERN consultation in Casablanca with Keltoum Houssni & HoussniJob Innovation — 34 students trained.",
  },
  {
    category: "Students",
    title: "Graduation — Web Development Essentials & Full-Stack JS",
    src: "/achivements/gomycode-full-stack.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gomycode-fullstackdeveloper-activity-7195412251904823296-ZK6A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Celebrated 5-month Web Development graduation at GoMyCode!",
  },
  {
    category: "Hackathon",
    title: "Hackathon — e-Tofoula Programming Competition",
    src: "/achivements/e-tofoula-hackathon.jpg",
    href: "https://www.linkedin.com/posts/gomycode_hackathon-gomycode-tech-ugcPost-7173336567711789056-T3xJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Represented GoMyCode at e-Tofoula — National Observatory for Children's Rights × UIR (Feb 14–16/2024).",
  },
  {
    category: "Students",
    title: "Graduation — Web, UX/UI & Graphic Design Programs",
    src: "/achivements/ux-ui-gomycode.jpg",
    href: "https://www.linkedin.com/posts/malak-margaa_adobecertified-graphicdesign-gomycode-ugcPost-7172935933003051008-tHug?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "GoMyCode graduates — Web Dev, UX/UI & Graphic Design courses completed!",
  },
  {
    category: "Students",
    title: "Graduation — 3-Month Training at GoMyCode Rabat",
    src: "/achivements/rabat-gomycode.jpg",
    href: "https://www.linkedin.com/posts/gomycode_gomycode-graduate-success-ugcPost-7141382914038013952-ML8w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "3-month training completion at GoMyCode Rabat!",
  },
  {
    category: "Workshop",
    title: "Workshop — Soft Skills & CV Writing at GoMyCode Rabat",
    src: "/achivements/cv-workshop-gomycode.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-formationprofessionnelle-softskills-activity-7127045105156263936-5Ez8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Soft Skills & CV Writing workshop — Nov 3, 2023 at GoMyCode Rabat.",
  },
  {
    category: "Workshop",
    title: "Workshop — Mastering LinkedIn for Career Growth",
    src: "/achivements/linkdin-workshop.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-linkedinworkshop-linkedininstructor-activity-7121543715860402179-ALvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "LinkedIn workshop — profile optimization, networking & landing dream jobs.",
  },
  {
    category: "Workshop",
    title: "Workshop — Build Your First Web Page (HTML/CSS/JS)",
    src: "/achivements/first-workshop.jpg",
    href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-code-formation-activity-7106187666513121280-zapn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
    description: "Free workshop “Build Your First Web Page with HTML/CSS/JS” — Sep 6 at GoMyCode Hackerspace Rabat.",
  },
];

const categories = ["All", "Students", "Workshop", "Hackathon", "Event", "Consulting"] as const;

export function StudentsGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? studentCards : studentCards.filter((c) => c.category === active);

  return (
    <div className="w-full py-8">
      {/* Filter bar — glass + code vibe */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="hidden sm:inline">~/moments</span>
            <span className="h-1 w-1 rounded-full bg-purple/60" />
            <span className="text-neutral-400">
              <span className="text-purple">{filtered.length}</span> entries
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="hidden sm:inline">expert • instructor • mentor</span>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter moments by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:text-sm ${
                  active === cat
                    ? "border-purple/50 bg-purple text-white shadow-[0_0_20px_rgba(203,172,249,0.35)]"
                    : "border-white/[0.08] bg-white/[0.04] text-neutral-400 hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {cat === "All" ? "All" : `<${cat} />`}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Grid — Bento / Expert IT dev */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((card, idx) => (
          <a
            key={card.src + idx}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${card.title} — View on LinkedIn`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-15px_rgba(203,172,249,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            {/* subtle grid overlay */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)]" />

            {/* IDE chrome */}
            <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-mono font-medium tracking-widest text-purple">
                  {card.category.toUpperCase()}
                </span>
                <span className="hidden items-center gap-1 text-[10px] font-mono text-neutral-500 sm:flex">
                  <span className="h-1 w-1 rounded-full bg-green-400/70 animate-pulse" />
                  live
                </span>
              </div>
            </div>

            {/* Image — 16/10 expert crop */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black-100">
              <Image
                src={card.src}
                alt={`${card.title} — ${card.category}`}
                fill
                loading="lazy"
                decoding="async"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              {/* gradient + purple tint on hover */}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              <div aria-hidden="true" className="absolute inset-0 bg-purple/0 transition-colors duration-300 group-hover:bg-purple/[0.07]" />

              {/* bottom title overlay — like IDE file tab */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-black/55 px-2.5 py-1.5 backdrop-blur-md">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  <span className="line-clamp-1 text-xs font-semibold leading-tight text-white">{card.title}</span>
                </div>
              </div>

              {/* external arrow */}
              <div aria-hidden="true" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                <IconExternalLink aria-hidden="true" className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-1 flex-col p-5">
              <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-300">
                {card.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="flex items-center gap-1.5 text-xs font-medium text-purple">
                  <IconBrandLinkedin aria-hidden="true" className="h-4 w-4" />
                  View on LinkedIn
                </span>
                <span aria-hidden="true" className="font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  0{String(idx + 1).padStart(2, "0")} — CODE
                </span>
              </div>
            </div>

            {/* hover glow */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "radial-gradient(600px circle at 50% 0%, rgba(203,172,249,0.15), transparent 60%)",
              }}
            />
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
          <p className="font-mono text-sm text-neutral-500">No entries for this filter — try “All”.</p>
        </div>
      )}
    </div>
  );
}
