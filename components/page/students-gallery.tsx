"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type StudentCard = {
  category: string;
  title: string;
  src: string;
  href?: string;
  content?: React.ReactNode;
};

const Caption = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-3xl">
    <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-sans max-w-3xl mx-auto text-center">
      {children}
    </p>
  </div>
);

const studentCards: StudentCard[] = [
    {
        category: "Students",
        title: "Graduation Demo Day — JADARA × Nouaceur Wings Tech × INDH — Full Stack MERN",
        src: "/achivements/indh-nouaceur-wings-tech.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-graduation-activity-7491219489578049536-BH2Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Demo Day after 6 months — JADARA (ONG) × Nouaceur Wings Tech × INDH — Full Stack MERN: HTML/CSS/Tailwind,
            JS (ES6+), React, Node/Express, MongoDB, Git/GitHub & AI tools. Teams presented to jury — proud of their
            technical & soft-skills growth.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-graduation-activity-7491219489578049536-BH2Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Students",
        title: "PFA & PFE Jury — Management Digital School — Développement Informatique",
        src: "/achivements/digital-management-school.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_managementdigitalschool-elmachhoune-gotodev-activity-7473374771796398080-s5KL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Jul 10, 2026 — As trainer & jury member, celebrated PFA & PFE defenses with 1st & 2nd year Développement
            Informatique students at Management Digital School — with colleague Issam EL JAOUHARI. Proud of their tech
            growth, creativity & professionalism.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_managementdigitalschool-elmachhoune-gotodev-activity-7473374771796398080-s5KL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Students",
        title: "Graduation & Jury — GON Wings Tech School — Guelmim Oued Noun x JADARA x ALX",
        src: "/achivements/gon-wings-tech.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-jadara-activity-7429516853183459328-7EaJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Feb 14, 2026 — Celebrating love of learning with Full Stack graduates — 4 months (Sep 2025 – Jan 2026) as
            Freelance Full Stack Instructor & Jury at &quot;GON Wings Tech School&quot; — Guelmim Oued Noun × JADARA
            (ONG) × ALX Morocco × Région Guelmim-Oued Noun.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gotodev-elmachhoune-jadara-activity-7429516853183459328-7EaJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Hackathon",
        title: "Jury & Workshop Speaker — Open Source Days 14.0 — ENSA Khouribga",
        src: "/achivements/open-source-hackathon.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-elmachhoune-gotodev-activity-7429470217078104064-loH9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Honored as Jury & Workshop Speaker at Open Source Days 14.0 — ENSA Khouribga (Feb 9–10, 2026) — invited by
            GOMYCODE. 2-day hackathon, conferences & workshops on real-world problems with 1337 vibes & open-source
            mindset.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-elmachhoune-gotodev-activity-7429470217078104064-loH9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Workshop",
        title: "Knowledge Exchange — Full-Stack × Digital Marketing — Nouaceur Wings Tech x JADARA",
        src: "/achivements/digital-marketing-jadara.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_nouaceurwingstech-jadarafoundation-fullstackdevelopment-activity-7422981836533882881-GmQE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            3-day knowledge exchange at Nouaceur Wings Tech × JADARA (ONG) — Feb 1, 2026 — with Omar Riad (Digital
            Marketing). Guided 30 students: Digital Marketing → portfolios (HTML/CSS/JS, AI &amp; no-AI) on GitHub &amp;
            Vercel; Full-Stack → Personal Branding.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_nouaceurwingstech-jadarafoundation-fullstackdevelopment-activity-7422981836533882881-GmQE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Workshop",
        title: "From Learner to Leader — ALX Morocco",
        src: "/achivements/alx-workshop.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_softwareengineering-freelancing-techleadership-activity-7403777074014089216-rbhU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Delivered &quot;From Learner to Leader: My Journey as a Freelance Software Engineer&quot; at ALX Morocco
            — Dec 7, 2025 (invited by El Mehdi HACHAMI, ALX Ventures). Shared real stories on skills, portfolio, client
            collaboration & leadership in tech.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_softwareengineering-freelancing-techleadership-activity-7403777074014089216-rbhU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Event",
        title: "Closing Ceremony — Orange Digital Centers x GIZ Morocco",
        src: "/achivements/odc-giz.png",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_ceremony-activity-7403818902180311040-JnJ4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Honored as speaker at the Nov 17, 2025 closing ceremony of &quot;Training Digital Skills — Fostering
            Employment Innovation through Orange Digital Centers&quot; — 3 years of impact by GIZ Morocco × Orange Money
            Africa & Middle East (develoPPP / Invest for Jobs): 12,773 beneficiaries (47% women), 1,248 jobs in Morocco;
            60k+ beneficiaries & 8k jobs across 14 countries.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_ceremony-activity-7403818902180311040-JnJ4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
    {
        category: "Students",
        title: "MERN Stack Bootcamp — Nouaceur Wings Tech",
        src: "/achivements/nwt-jadara-gomycode.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gotodev-nouaceurwingstech-activity-7351641652945469441-aHjd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            I had the pleasure of mentoring a talented group of students during the Software Developer Bootcamp organized
            by Nouaceur Wings Tech, in partnership with Jadara Foundation, GoMyCode, INDH, and local authorities in
            Nouaceur.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gotodev-nouaceurwingstech-activity-7351641652945469441-aHjd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Web Development Workshop — Casablanca Technopark",
        src: "/achivements/omnia-school.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formation-giz-aezducation-activity-7325933368330579968-l0Jx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            As part of the GIZ Morocco program with HoussniJob Innovation, I led a training session on May 5, 2025, at
            Casablanca Technopark for first-year students of OMNIA School of Business and Technology.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_formation-giz-aezducation-activity-7325933368330579968-l0Jx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Final Project Defense — JADARA x GoMyCode Bootcamp",
        src: "/achivements/women-coders.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_bootcamp-soutenance-womenintech-activity-7319298728769589248-aLWW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            My students successfully completed their software development training under the JADARA Foundation in
            collaboration with GoMyCode.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_bootcamp-soutenance-womenintech-activity-7319298728769589248-aLWW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Full Stack Development Training — Casablanca Technopark",
        src: "/achivements/consultation-giz.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-fullstackdevelopment-activity-7311437787017166850-HeXI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            As a trainer, I had the pleasure of leading a 3-day Full Stack Development workshop at Technopark Casablanca
            (MITC) with HoussniJob Innovation.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-fullstackdevelopment-activity-7311437787017166850-HeXI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Frontend Development Training — Casablanca Technopark",
        src: "/achivements/technopark-houssnijob.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-frontenddevelopment-activity-7309263103639126017-8328?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            As a trainer, I had the pleasure of leading a 4-day Frontend Development workshop at Technopark Casablanca
            (MITC) with HoussniJob Innovation.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_formationprofessionnelle-frontenddevelopment-activity-7309263103639126017-8328?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Professional Training — Technopark Casablanca",
        src: "/achivements/giz-technopark-houssnijob.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formateur-formationprofessionnelle-alternance-activity-7303540364945051650-CPyf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            I led an intensive professional training at Technopark Casablanca with HoussniJob Innovation, under the Tamheen
            Program by GIZ Morocco.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_formateur-formationprofessionnelle-alternance-activity-7303540364945051650-CPyf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Event",
        title: "GoToDev.ma at the Professional Excellence Forum — Ibn Tofail University",
        src: "/achivements/job-fair-forum.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_uitjobfair-hackathon-innovation-activity-7272358479766466560-M5Dg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Proud to represent GoToDev.ma at the Professional Excellence Forum (UIT Job Fair) on December 4–5, 2024, after
            winning the first edition of the Hack@UIT Hackathon.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_uitjobfair-hackathon-innovation-activity-7272358479766466560-M5Dg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "MERN Stack Consultation — Casablanca",
        src: "/achivements/consultation-efet.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_formation-mernstack-fullstackjs-activity-7203496109959229440-3Nij?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            I had the pleasure of leading a 6-day MERN Stack consultation in Casablanca with Keltoum Houssni and
            HoussniJob Innovation. Trained over 34 students.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_formation-mernstack-fullstackjs-activity-7203496109959229440-3Nij?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Graduation — Web Development Essentials & Full-Stack JS",
        src: "/achivements/gomycode-full-stack.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gomycode-fullstackdeveloper-activity-7195412251904823296-ZK6A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Celebrating the graduation of my talented students after five months of intensive Web Development training at
            GoMyCode!
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_elmachhoune-gomycode-fullstackdeveloper-activity-7195412251904823296-ZK6A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Hackathon",
        title: "Hackathon — e-Tofoula Programming Competition",
        src: "/achivements/e-tofoula-hackathon.jpg",
        href: "https://www.linkedin.com/posts/gomycode_hackathon-gomycode-tech-ugcPost-7173336567711789056-T3xJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Honored to represent GoMyCode at the first e-Tofoula Programming Competition, organized by the National
            Observatory for Children&apos;s Rights and Université Internationale de Rabat (Feb 14–16/2024).
            <a
              href="https://www.linkedin.com/posts/gomycode_hackathon-gomycode-tech-ugcPost-7173336567711789056-T3xJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Graduation — Web, UX/UI & Graphic Design Programs",
        src: "/achivements/ux-ui-gomycode.jpg",
        href: "https://www.linkedin.com/posts/malak-margaa_adobecertified-graphicdesign-gomycode-ugcPost-7172935933003051008-tHug?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Celebrating the success of my students at GoMyCode who completed Introduction to Web Development, UX/UI
            Design, and Graphic Design courses!
            <a
              href="https://www.linkedin.com/posts/malak-margaa_adobecertified-graphicdesign-gomycode-ugcPost-7172935933003051008-tHug?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Students",
        title: "Graduation — 3-Month Training at GoMyCode Rabat",
        src: "/achivements/rabat-gomycode.jpg",
        href: "https://www.linkedin.com/posts/gomycode_gomycode-graduate-success-ugcPost-7141382914038013952-ML8w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Thrilled to celebrate the completion of a three-month training with an amazing group of students at GoMyCode
            Rabat!
            <a
              href="https://www.linkedin.com/posts/gomycode_gomycode-graduate-success-ugcPost-7141382914038013952-ML8w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Workshop",
        title: "Workshop — Soft Skills & CV Writing at GoMyCode Rabat",
        src: "/achivements/cv-workshop-gomycode.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-formationprofessionnelle-softskills-activity-7127045105156263936-5Ez8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Grateful to GoMyCode Rabat for the opportunity to lead a Soft Skills and CV Writing workshop on November
            3rd (2023)
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-formationprofessionnelle-softskills-activity-7127045105156263936-5Ez8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Workshop",
        title: "Workshop — Mastering LinkedIn for Career Growth",
        src: "/achivements/linkdin-workshop.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-linkedinworkshop-linkedininstructor-activity-7121543715860402179-ALvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Wrapped up a successful LinkedIn Workshop where I shared strategies for optimizing profiles, networking
            effectively, and landing dream jobs.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-linkedinworkshop-linkedininstructor-activity-7121543715860402179-ALvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      {
        category: "Workshop",
        title: "Workshop — Build Your First Web Page (HTML/CSS/JS) — GoMyCode Rabat",
        src: "/achivements/first-workshop.jpg",
        href: "https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-code-formation-activity-7106187666513121280-zapn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc",
        content: (
          <Caption>
            Grateful to GoMyCode Hackerspace Rabat for the opportunity to lead the free workshop &quot;Build Your First
            Web Page with HTML/CSS/JS&quot; on September 6th.
            <a
              href="https://www.linkedin.com/posts/mohamed-el-machhoune_gomycode-code-formation-activity-7106187666513121280-zapn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA6y7KUBZTG8-rkxCQp_popAtk0BbojTrsc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline underline-offset-4"
            >
              View on LinkedIn →
            </a>
          </Caption>
        ),
      },
      
];

export function StudentsGallery() {
  const cards = studentCards.map((card) => (
    <Card key={card.src} card={card} aspect="landscape" />
  ));

  return (
    <div className="w-full h-full py-16">
      <Carousel items={cards} />
    </div>
  );
}
