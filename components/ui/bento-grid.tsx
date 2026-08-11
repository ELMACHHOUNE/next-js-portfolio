"use client"; // Ensure the component is client-side

import Image from "next/image";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { Sparkles } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Rust", icon: SiRust, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "C#", icon: SiDotnet, color: "#512BD4" },
  { name: "AI integration", icon: Sparkles, color: "#74AA9C" },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-5 lg:gap-7",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-15px_rgba(203,172,249,0.35)]",
        className
      )}
    >
      {(img || spareImg) && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}

      {img && (
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <Image
            width={689}
            height={541}
            src={img}
            alt="Image"
            className={cn("object-cover object-center", imgClassName)}
          />
        </div>
      )}

      {spareImg && (
        <div
          className={cn(
            "pointer-events-none absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          <Image
            width={208}
            height={96}
            src={spareImg}
            alt="Spare Image"
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      {id === 2 && (
        <DottedMap
          markers={[
            { lat: 33.5731, lng: -7.5898, size: 0.6, pulse: true },
            { lat: 40.7128, lng: -74.006, size: 0.6, pulse: true },
            { lat: 51.5074, lng: -0.1278, size: 0.6, pulse: true },
            { lat: 35.6762, lng: 139.6503, size: 0.6, pulse: true },
            { lat: -33.8688, lng: 151.2093, size: 0.6, pulse: true },
          ]}
          dotColor="rgba(203,172,249,0.3)"
          markerColor="#CBACF9"
          dotRadius={0.2}
          pulse
          className="pointer-events-none absolute inset-0 z-0 opacity-70"
        />
      )}

      <div
        className={cn(
          "relative z-10 flex min-h-44 flex-1 flex-col gap-5 p-6 lg:p-8",
          titleClassName
        )}
      >
        {description && id !== 3 && (
          <div className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-purple backdrop-blur-sm lg:text-sm">
            {description}
          </div>
        )}

        {id !== 3 && (
          <div className="w-3/4 max-w-3xl font-sans text-xl font-bold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] lg:text-3xl">
            {title}
          </div>
        )}

        {id === 3 && (
          <div className="relative flex w-full flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              {description && (
                <div className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-purple backdrop-blur-sm lg:text-sm">
                  {description}
                </div>
              )}
              <div className="text-center font-sans text-2xl font-bold text-white lg:text-4xl">
                {title}
              </div>
            </div>

            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div
                className="flex w-max items-center gap-3 animate-scroll"
                style={{ "--animation-duration": "30s" } as React.CSSProperties}
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={`${tech.name}-${i}`}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-neutral-200 backdrop-blur-sm lg:px-5 lg:py-4 lg:text-base"
                  >
                    <tech.icon className="h-5 w-5 lg:h-6 lg:w-6" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
