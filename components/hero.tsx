import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { ContributionGrid } from "@/components/ui/contribution-grid";

export const Hero = () => {
  return (
    <div className="pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-16 sm:my-20 flex justify-center">
        <div className="flex max-w-[95vw] flex-col items-center justify-center sm:max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          {/* Theme-styled "GitHub contributions" section */}
          <div className="relative mb-6 w-full flex justify-center">
            <div className="relative w-full rounded-2xl p-[2px] bg-gradient-to-r from-[#CBACF9] via-white/70 to-[#CBACF9] dark:via-[#000319] shadow-lg">
              <div className="relative rounded-2xl bg-white/70 dark:bg-[#000319]/60 backdrop-blur-md p-4 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[260px] md:min-h-[300px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ContributionGrid
                    palette="theme"
                    weeks={48}
                    size={12}
                    gap={4}
                    className="opacity-95 scale-[0.92] sm:scale-100"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full p-[3px] bg-gradient-to-tr from-[#CBACF9] to-white dark:to-[#000319] shadow-xl">
                    <img
                      src="/elmachhoune.jpg"
                      alt="Profile Photo"
                      className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full ring-4 ring-white dark:ring-[#000319] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="max-w-80 text-center text-[10px] uppercase tracking-widest text-blue-100 sm:text-xs">
            Building Innovative Solutions with Passion and Precision
          </h2>

          <TextGenerateEffect
            className="text-center text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl"
            words="Software Engineer & Graphic Designer / Instructor / Consultant"
          />

          <p className="mb-4 text-center text-xs sm:text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m {links.ownerName}, a Full-Stack Developer & Creative Designer dedicated to delivering impactful digital experiences.
          </p>

          <Link href="#about" className="mt-6 sm:mt-10">
            <MagicButton
              title="Discover More"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
