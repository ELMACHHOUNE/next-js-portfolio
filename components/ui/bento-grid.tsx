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

      {id === 6 && <BackgroundGradientAnimation />}

      <div
        className={cn(
          "relative z-10 flex min-h-44 flex-1 flex-col gap-5 p-6 lg:p-8",
          titleClassName
        )}
      >
        {description && (
          <div className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-purple backdrop-blur-sm lg:text-sm">
            {description}
          </div>
        )}

        <div className="max-w-md font-sans text-xl font-bold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] lg:text-3xl">
          {title}
        </div>

        {id === 3 && (
          <div className="mt-auto flex max-w-md flex-wrap items-center justify-center gap-2 lg:gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-neutral-200 backdrop-blur-sm lg:text-sm"
              >
                <tech.icon className="h-4 w-4 lg:h-5 lg:w-5" style={{ color: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>
        )}

        {id === 2 && <GridGlobe />}

        {id === 6 && (
          <div className="group relative mt-auto flex flex-col items-center gap-6">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={copied}
                autoplay={copied}
                style={{ width: "200px", height: "200px", marginTop: "-1rem" }}
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
  );
};
