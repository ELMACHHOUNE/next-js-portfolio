"use client"; // Ensure the component is client-side

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { links } from "@/config";
import { techStack } from "@/data";
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
  const [animationData, setAnimationData] = useState(null);

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
