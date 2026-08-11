"use client"; // Ensure the component is client-side

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
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
import { links } from "@/config";
import { cn } from "@/lib/utils";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Dynamically import other components
const BackgroundGradientAnimation = dynamic(
  () => import("./background-gradient-animation").then((mod) => mod.BackgroundGradientAnimation),
  { ssr: false }
);
const MagicButton = dynamic(
  () => import("./magic-button").then((mod) => mod.MagicButton),
  { ssr: false }
);
const GridGlobe = dynamic(
  () => import("../grid-globe").then((mod) => mod.GridGlobe),
  { ssr: false }
);

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
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
  const [copied, setCopied] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);

  // Dynamically load the animation data
  useEffect(() => {
    async function loadAnimationData() {
      const animation = await import("@/data/confetti.json");
      setAnimationData(animation.default);
    }
    loadAnimationData();
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(links.ownerEmail);
      setCopied(true);
    }
  };

  // Reset copied state after 3.5 seconds
  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), 3500);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt="Image"
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt="Spare Image"
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 3 && (
            <div className="z-10 mt-5 flex max-w-md flex-wrap items-center justify-center gap-2 lg:mt-6 lg:gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#10132e] px-3 py-2 text-xs text-neutral-200 lg:text-sm"
                >
                  <tech.icon className="h-4 w-4 lg:h-5 lg:w-5" style={{ color: tech.color }} />
                  {tech.name}
                </span>
              ))}
            </div>
          )}

          {id === 2 && <GridGlobe />}

          {id === 6 && (
            <div className="group relative mt-5">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ width: "200px", height: "200px" }}
                />
              ) : (
                <p>Loading animation...</p>
              )}

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
