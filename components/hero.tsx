import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

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
          {/* Profile Photo */}
          <div className="relative mb-6">
            <img
              src="/elmachhoune.png" // Replace with the actual path to your profile photo
              alt="Profile Photo"
              className="h-28 w-28 rounded-full border-4 border-blue-100 shadow-lg sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-30 blur-lg"></div>
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
